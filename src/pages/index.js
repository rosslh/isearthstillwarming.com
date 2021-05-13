import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { lighten, desaturate } from 'unitransform';
import { css } from '@emotion/core';
import { withRouteData } from 'react-static';
import { Scatter } from 'react-chartjs-2';
import Cite from '../components/cite';
import RefList from '../components/reflist';
import IsEarthWarming from '../components/isEarthWarming';
import Header from '../components/header';
import CO2 from '../components/co2';
import ContentWrapper from '../components/contentWrapper';
import { red } from '../utils/colors';
import ShareLinks from '../components/shareLinks';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const figureWrapperStyle = css`
      width: 80%;
      margin: 3rem auto;
      >div{
        padding 1.5rem;
        box-shadow:rgba(00, 00, 00, 0.2) 0px 6px 16px 0px;
        border-radius: 5px;
        > img {
          width: 100%;
        }
      @media (max-width: 700px) {
        padding: 0;
        box-shadow: none;
      }
      }
      >strong {
        margin-top: 1.5rem;
        display: block;
        text-align: center;
      }
      @media (max-width: 700px) {
        width: 98%;
      }
    `;
    const datasetOptions = {
      borderColor: lighten(red, 10),
      backgroundColor: desaturate(lighten(red, 20), 30)
    };

    const {
      co2,
      temp,
      latestCo2Value,
      latestTempValue,
      slrTrend,
      latestCo2Year,
      latestIceMeltValue,
      latestTempYear,
      tenYearWarming
    } = this.props;

    return (
      <>
        <Header
          currentCo2={latestCo2Value}
          currentTemp={latestTempValue}
          currentSlr={slrTrend}
          currentIceMelt={latestIceMeltValue}
        />
        <ContentWrapper>
          <article
            css={css`
              svg {
                margin: 0 auto;
                display: block;
                .mg-active-datapoint-container {
                  transform: translate(-200px, 0);
                }
              }
            `}
          >
            <h2
              css={css`
                margin-top: 0;
                padding-top: 0;
              `}
            >
              Is global warming still happening?
            </h2>
            <IsEarthWarming
              tenYearWarming={tenYearWarming}
              latestTempValue={latestTempValue}
            />
            <ShareLinks />
            <h2>What is global warming?</h2>
            <p>
              Global warming is the trend of Earth
              {`'`}
              s temperature rising at an unprecedented rate starting in the mid
              20th century.
              <Cite name="nasa" />
            </p>
            <p>
              Though gradual changes to Earth
              {`'`}
              s climate have happened in the past, this latest trend has been
              primarily caused by the release of carbon dioxide (
              <CO2 />
              ) into the atmosphere by burning fossil fuels.
              <Cite name="nasa" /> <CO2 /> is a <em>greenhouse gas</em>, meaning
              it traps heat in Earth
              {`'`}
              s atmosphere rather than allowing it to radiate into space.
              <Cite name="nasa" />
            </p>
            <p>
              Since the mid 1950s, Earth
              {`'`}s temperature has had a clear positive trend (see fig. 1).
            </p>
            <div css={figureWrapperStyle}>
              <div>
                <Scatter
                  data={{
                    datasets: [
                      {
                        label: `Global average temperature`,
                        data: temp,
                        ...datasetOptions
                      }
                    ]
                  }}
                  options={{
                    legend: {
                      display: false
                    },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: value => `${value}°C`
                          },
                          scaleLabel: {
                            display: true,
                            labelString: `Global average temperature`
                          }
                        }
                      ]
                    },
                    tooltips: {
                      callbacks: {
                        label: tooltipItem =>
                          `${tooltipItem.xLabel}, ${tooltipItem.yLabel}°C`
                      },
                      mode: `index`,
                      intersect: false
                    }
                  }}
                />
              </div>
              <strong>
                Figure 1
                <Cite name="tempData" />
              </strong>
            </div>
            <p>
              The amount Earth has warmed is measured against the average
              pre-industrial global temperature. As of
              {` `}
              <span id="latestTempYear">{latestTempYear}</span>, Earth
              {`'`}s temperature is approximately
              {` `}
              <span id="latestTempValue">{latestTempValue}</span>
              °C above pre-industrial levels.
              <Cite name="tempData" /> If the planet
              {`'`}s temperature continues to rise, we can expect many
              environmental and societal impacts, the most significant of which
              we will explain in this paper.
            </p>
            <p>
              In late 2015, 184 nations were party to the Paris Climate Accord,
              a UN agreement dealing with reducing greenhouse gas emissions in
              an effort to mitigate global warming. The stated goal of the
              agreement is to limit the average global temperature to 1.5°C
              above pre-industrial levels.
              <Cite name="1.5C" />
            </p>
            <p>
              In 2018, the UN released a report detailing the potential impacts
              of human-induced climate change and possible preventative
              measures. Its key finding was that staying below the 1.5°C target
              is possible, but would require {`"`}
              rapid, far-reaching, and unprecedented changes in all aspects of
              society
              {`"`}
              .
              <Cite name="1.5C-press-release" /> Human carbon emissions would
              need to decrease by 45% from 2010 levels by 2030, and reach net
              zero by 2050.
              <Cite name="1.5C" />
            </p>
            <p>
              The primary cause of global warming is the human emission of
              {` `}
              <CO2 /> into the atmosphere. This
              <CO2 />
              {` `}
              is produced by burning fossil fuels, mostly from electricity
              production, agriculture, industry, and vehicles with internal
              combustion engines.
              <Cite name="emissionsData" />
              {` `}
              As of
              {` `}
              <span id="latestCo2Year">{latestCo2Year}</span>, the atmosphere
              {`'`}s carbon concentration is
              {` `}
              <span id="latestCo2Value">{latestCo2Value}</span>
              ppm (see fig. 2).
              <Cite name="co2After1958" />
            </p>
            <div css={figureWrapperStyle}>
              <div>
                <Scatter
                  data={{
                    datasets: [
                      {
                        label: `Atmospheric CO2`,
                        data: co2,
                        ...datasetOptions
                      }
                    ]
                  }}
                  options={{
                    legend: {
                      display: false
                    },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: value => `${value}ppm`
                          },
                          scaleLabel: {
                            display: true,
                            labelString: `Atmospheric CO2 concentration`
                          }
                        }
                      ]
                    },
                    tooltips: {
                      callbacks: {
                        label: tooltipItem =>
                          `${tooltipItem.xLabel}, ${tooltipItem.yLabel}ppm`
                      },
                      mode: `index`,
                      intersect: false
                    }
                  }}
                />
              </div>
              <strong>
                Figure 2
                <Cite name="co2After1958" />
                <Cite name="co2Before1958" />
              </strong>
            </div>
            <p>
              Since <CO2 />
              {` `}
              abundance in the atmosphere is directly linked to the Earth
              {`'`}s temperature increase, limiting atmospheric carbon has been
              identified as vital to mitigating global warming. As part of the
              Kyoto Protocol climate convention, scientists have 450ppm as a
              good upper limit for carbon concentration in order to keep global
              warming below +2°C.
            </p>
            <h2>Effects of global warming</h2>
            <p>
              Global warming will impact a wide range of issues including
              health, livelihoods, food security, water supply, human security,
              and economic growth.
              <Cite name="1.5C" /> The severity of these impacts is determined
              by how hot Earth gets; reaching 2°C above the pre-industrial
              average would put millions more people at risk than if global
              warming was limited to 1.5°C.
              <Cite name="1.5C" />
              {` `}
              Generally speaking,
              {`"`}
              countries in the tropics and Southern Hemisphere subtropics are
              projected to experience the largest impacts on economic growth.
              {`"`}
              <Cite name="1.5C" />
            </p>
            <p>
              The UN projects more frequent weather extremes (both heavy rain
              and drought) and temperature extremes due to global warming.
              <Cite name="1.5C" /> The most immediate risk to the environment is
              the dying-off of coral reefs- a process that has already started
              on a large scale (see fig. 3).
            </p>
            <div css={figureWrapperStyle}>
              <div>
                <img src={`assets/risks.png`} alt="risks of climate change" />
              </div>
              <strong>
                Figure 3
                <Cite name="guardian" />
                <Cite name="1.5C" />
              </strong>
            </div>
            <p>
              The changing climate is likely to increase the prevalence of
              disease. Global increases in temperature are estimated to alter
              the distribution of insects that are known vectors for pathogens,
              such as mosquitos.
              <Cite name="pathogenMigration" /> Studies in China show that
              increasing temperatures positively affect the viability of disease
              transfer by decreasing the viral incubation time in vectors --
              leading to increased infection rates.
              <Cite name="viralIncubation" />
              The World Health Organization estimated that climate change has
              been responsible for 3% of diarrhoea, 3% of malaria, and 3.8% of
              dengue fever deaths worldwide in 2004. Total attributable
              mortality was about 0.2% of deaths in 2004; of these, 85% were
              child deaths.
              <Cite name="who" />
            </p>
            <p>
              Global biodiversity comes under major threat from climate change
              as changing environments increase extinction pressure on species.
              A review in 2013 reveals that changing environments may lead to
              the extinction of thousands of species within the next 100 years.
              The proximate causes of such extinctions include biotic and
              abiotic factors, such as limited physiological tolerance to high
              temperatures and changing species interactions.
              <Cite name="speciesExtinction" />
            </p>
            <p>
              Other already-visible impacts of global warming include worldwide
              glacier and sea ice melting, which contributes to sea level rise.
              <Cite name="natGeo" /> However, thermal expansion is a larger
              component in this, contributing 70-75% of sea level rise.
              <Cite name="ipcc" />
              {` `}
              Some regions have experienced severe drought, leading to
              food-and-water shortages as well as wildfires.
              <Cite name="natGeo" />
            </p>
            <h2
              css={css`
                margin-top: 4%;
                font-size: 1.2em;
              `}
            >
              Works Cited
            </h2>
            <RefList />
          </article>
        </ContentWrapper>
      </>
    );
  }
}

Home.propTypes = {
  co2: PropTypes.arrayOf(PropTypes.object),
  temp: PropTypes.arrayOf(PropTypes.object),
  latestCo2Value: PropTypes.number,
  latestTempValue: PropTypes.number,
  latestIceMeltValue: PropTypes.number,
  latestTempYear: PropTypes.number,
  slrTrend: PropTypes.number,
  latestCo2Year: PropTypes.number,
  tenYearWarming: PropTypes.number.isRequired
};

export default withRouteData(Home);
