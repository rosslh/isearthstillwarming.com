import React from 'react';
import { css } from '@emotion/core';

export const citations = [
  {
    name: `1.5C`,
    citation: `IPCC, 2018: Summary for Policymakers. In: Global warming of 1.5°C. An IPCC Special Report on the impacts of global warming of 1.5°C above pre-industrial levels and related global greenhouse gas emission pathways, in the context of strengthening the global response to the threat of climate change, sustainable development, and efforts to eradicate poverty [V. Masson-Delmotte, P. Zhai, H. O. Pörtner, D. Roberts, J. Skea, P.R. Shukla, A. Pirani, W. Moufouma-Okia, C. Péan, R. Pidcock, S. Connors, J. B. R. Matthews, Y. Chen, X. Zhou, M. I. Gomis, E. Lonnoy, T. Maycock, M. Tignor, T. Waterfield (eds.)]. World Meteorological Organization, Geneva, Switzerland, 32 pp.`,
    url: `https://www.ipcc.ch/sr15/chapter/spm/`
  },
  {
    name: `1.5C-press-release`,
    citation: `Summary for Policymakers of IPCC Special Report on Global Warming of 1.5°C approved by governments. Incheon, Republic of Korea: Intergovernmental Panel on Climate Change (IPCC). 8 October 2018.`,
    url: `https://www.ipcc.ch/2018/10/08/summary-for-policymakers-of-ipcc-special-report-on-global-warming-of-1-5c-approved-by-governments/`
  },
  {
    name: `guardian`,
    citation: `Jay, A., D.R. Reidmiller, C.W. Avery, D. Barrie, B.J. DeAngelo, A. Dave, M. Dzaugis, M. Kolian, K.L.M. Lewis, K. Reeves, and D. Winner, 2018: Overview. In Impacts, Risks, and Adaptation in the United States: Fourth National Climate Assessment, Volume II [Reidmiller, D.R., C.W. Avery, D.R. Easterling, K.E. Kunkel, K.L.M. Lewis, T.K. Maycock, and B.C. Stewart (eds.)]. U.S. Global Change Research Program, Washington, DC, USA, pp. 33–71. doi: 10.7930/NCA4.2018.CH1.`,
    url: `https://www.theguardian.com/environment/2018/oct/08/global-warming-must-not-exceed-15c-warns-landmark-un-report`
  },
  {
    name: `nasa`,
    citation: `"Global Climate Change." NASA Global Climate Change and Global Warming: Vital Signs of the Planet. Jet Propulsion Laboratory / National Aeronautics and Space Administration, 15 June 2008. Web. 14 Jan. 2015. <http://climate.nasa.gov/>.`,
    url: `https://climate.nasa.gov/`
  },
  {
    name: `co2After1958`,
    citation: `C. D. Keeling, S. C. Piper, R. B. Bacastow, M. Wahlen, T. P. Whorf, M. Heimann, and H. A. Meijer, Exchanges of atmospheric CO2 and 13CO2 with the terrestrial biosphere and oceans from 1978 to 2000. I. Global aspects, SIO Reference Series, No. 01-06, Scripps Institution of Oceanography, San Diego, 88 pages, 2001. <http://escholarship.org/uc/item/09v319r9>.`,
    url: `http://scrippsco2.ucsd.edu/data/atmospheric_co2/icecore_merged_products`
  },
  {
    name: `co2Before1958`,
    citation: `MacFarling Meure, C., D. Etheridge, C. Trudinger, P. Steele, R. Langenfelds, T. van Ommen, A. Smith, and J. Elkins. 2006. The Law Dome CO2, CH4 and N2O Ice Core Records Extended to 2000 years BP. Geophysical Research Letters, Vol. 33, No. 14, L14810 10.1029/2006GL026152.`,
    url: `http://scrippsco2.ucsd.edu/data/atmospheric_co2/icecore_merged_products`
  },
  {
    name: `tempData`,
    citation: `“Global Surface Temperature | NASA Global Climate Change.” NASA, NASA, 3 May 2018, <https://climate.nasa.gov/vital-signs/global-temperature/>.`,
    url: `https://climate.nasa.gov/vital-signs/global-temperature/`
  },
  {
    name: `emissionsData`,
    citation: `“Global Greenhouse Gas Emissions Data.” Global Greenhouse Gas Emissions Data, Environmental Protection Agency, 13 Apr. 2017, <https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data>.`,
    url: `https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data`
  },
  {
    name: `natGeo`,
    citation: `“Global Warming Effects.” National Geographic, National Geographic, 14 Jan. 2019, www.nationalgeographic.com/environment/global-warming/global-warming-effects/.`,
    url: `https://www.nationalgeographic.com/environment/global-warming/global-warming-effects/`
  },
  {
    name: `ipcc`,
    citation: `Meehl, G.A., T.F. Stocker, W.D. Collins, P. Friedlingstein, A.T. Gaye, J.M. Gregory, A. Kitoh, R. Knutti, J.M. Murphy, A. Noda, S.C.B. Raper, I.G. Watterson, A.J. Weaver and Z.-C. Zhao, 2007: Global Climate Projections. In: Climate Change 2007: The Physical Science Basis. Contribution of Working Group I to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change [Solomon, S., D. Qin, M. Manning, Z. Chen, M. Marquis, K.B. Averyt, M. Tignor and H.L. Miller (eds.)]. Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA`,
    url: `https://archive.ipcc.ch/publications_and_data/ar4/wg1/en/ch10.html`
  },
  {
    name: `who`,
    citation: `"Global Health Risks." World Health Organization, 2009.`,
    url: `https://www.who.int/healthinfo/global_burden_disease/GlobalHealthRisks_report_part2.pdf`
  },
  {
    name: `nsdic`,
    citation: `" Project to monitor regular melt conditions on the ice cover in Greenland from NSDIC (National Snow and Ice Data Center) Greenland Ice Sheet Today is produced by Ted Scambos, Julienne Stroeve, and Lora Koenig with support from NASA."`,
    url: `https://nsidc.org/greenland-today/greenland-surface-melt-extent-interactive-chart/`
  },
  {
    name: `PolarPortal`,
    citation: `"Project to monitor present surface conditions on Greenland Snow Cover funded and supported by Dancea (Danish Cooperation for Environment in the Arctic) under the Danish Ministry for Energy, Utilities and Climate"`,
    url: `http://polarportal.dk/en/greenland/surface-conditions/`
  },
  {
    name: `GreenLandTweet`,
    citation: `"Tweet on Twitter account handled by Danish Meteorological Institute and the Polar Project"`,
    url:`https://twitter.com/greenlandicesmb/status/1156789601182375936`
  },
  {
    name: `GreenLand2012`,
    citation: `"Nghiem, S. V., Hall, D. K., Mote, T. L., Tedesco, M., Albert, M. R., Keegan, K., Shuman, C. A., DiGirolamo, N. E., and Neumann, G. ( 2012), The extreme melt across the Greenland ice sheet in 2012, Geophys. Res. Lett., 39, L20502, doi:10.1029/2012GL053611. "`,
    url: `https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2012GL053611`
  }
];
const RefList = () => (
  <ol
    css={css`
      list-style-position: inside;
      margin: 0;
      padding: 0;
    `}
  >
    {citations.map(x => (
      <li
        css={css`
          text-indent: -2rem;
          margin-left: 2rem;
          padding-bottom: 1.5rem;
          word-break: break-all;
        `}
        key={x.name}
        id={`ref-${x.name}`}
      >
        {x.citation}
        {` `}
        {x.url && (
          <a href={x.url} rel="external noopener">
            More information
          </a>
        )}
      </li>
    ))}
  </ol>
);

export default RefList;
