import axios from 'axios';
import csv from 'csvtojson';

const dateFromYear = year => Math.trunc(Number(year));

const minYear = 1700;

const getTemp = async () => {
  let { data: temp } = await axios.get(
    `https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt`
  );

  temp = await csv({ noheader: true }).fromString(
    temp
      .replace(/[\t\v\f\r \u00a0\u2000-\u200b\u2028-\u2029\u3000]+/g, `,`)
      .replace(/,,+/g, `,`)
  );

  temp = temp
    .filter(
      x =>
        x.field1 &&
        x.field3 &&
        !isNaN(x.field1) &&
        !isNaN(x.field3) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => ({ x: dateFromYear(x.field1), y: Number(x.field3) }));

  const latestTempYear = Math.max(...temp.map(value => value.x));

  const tenYearWarming =
    Math.round(
      (temp.find(value => value.x === latestTempYear).y -
        temp.find(value => value.x === latestTempYear - 10).y) *
        100
    ) / 100;

  return { temp, latestTempYear, tenYearWarming };
};

const getCo2 = async () => {
  let { data: co2 } = await axios.get(
    `https://scrippsco2.ucsd.edu/assets/data/atmospheric/merged_ice_core_mlo_spo/merged_ice_core_yearly.csv`
  );

  co2 = await csv({ noheader: true }).fromString(co2.replace(/".*"\n/g, ``));

  co2 = co2
    .filter(
      x =>
        x.field1 &&
        x.field2 &&
        !isNaN(x.field1) &&
        !isNaN(x.field2) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => ({ x: dateFromYear(x.field1), y: Math.trunc(Number(x.field2)) }));

  const latestCo2Year = Math.max(...co2.map(val => val.x));

  return { co2, latestCo2Year };
};

const getSlr = async () => {
  let { data: slr } = await axios.get(
    `https://www.star.nesdis.noaa.gov/sod/lsa/SeaLevelRise/slr/slr_sla_gbl_free_all_66.csv`
  );

  slr = await csv({ noheader: true }).fromString(slr.replace(/".*"\n/g, ``));

  slr = slr
    .filter(
      x =>
        x.field1 &&
        x.field5 &&
        !isNaN(x.field1) &&
        !isNaN(x.field5) &&
        dateFromYear(x.field1) > minYear
    )
    .map(x => ({ x: dateFromYear(x.field1), y: Math.trunc(Number(x.field5)) }));

  const latestSlrYear = Math.max(...slr.map(val => val.x));

  return { slr, latestSlrYear };
};

export default {
  getRoutes: async () => {
    const { temp, latestTempYear, tenYearWarming } = await getTemp();

    const { co2, latestCo2Year } = await getCo2();

    const { slr, latestSlrYear } = await getSlr();

    return [
      {
        path: `/`,
        template: `src/pages/index.js`,
        getData: () => ({
          co2,
          temp,
          latestCo2Year,
          latestTempYear,
          tenYearWarming,
          latestCo2Value: co2.find(value => value.x === latestCo2Year).y,
          latestTempValue: temp.find(value => value.x === latestTempYear).y,
          latestSlrYear,
          latestSlrValue: slr.find(value => value.x === latestSlrYear).y
        })
      }
    ];
  }
};
