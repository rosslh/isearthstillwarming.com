import React from 'react';
import { lighten } from 'unitransform';
import { css } from '@emotion/core';

import Counter from './counter';
import { red, redDark } from '../utils/colors';
import ContentWrapper from './contentWrapper';
import fire from '../../public/assets/fire-icon.svg';

const Header = props => (
  <header
    css={css`
      background-color: ${red};
      color: white !important;
      a {
        color: white !important;
      }
      box-shadow: inset 0 -6rem 12rem -6rem ${redDark}44,
        0px 4px 8px 0px rgba(34, 34, 34, 0.3);
      border-radius: 0% 0% 50% 50% / 0% 0% 0.8rem 0.8rem;
      margin-bottom: 1.75rem;
    `}
  >
    <div
      css={css`
        background-color: ${redDark};
      `}
    >
      <ContentWrapper
        style={`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h1
          css={css`
            margin: 0;
            padding: 0 !important;
            line-height: 40px;
            font-size: 20px;
            display: flex;
            align-items: center;
            font-weight: 600;
          `}
        >
          <img
            css={css`
              margin-right: 0.6rem;
            `}
            alt="fire icon"
            height="20px"
            src={fire}
          />
          {` `}
          IsEarthStillWarming.com
        </h1>
        <nav
          css={css`
            a {
              display: inline-block;
              margin: 0 6px;
              &:first-of-type {
                margin-left: 0;
              }
            }
          `}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rosslh/isearthstillwarming.com"
          >
            GitHub
          </a>
        </nav>
      </ContentWrapper>
    </div>
    <Counter {...props} />
    <div
      css={css`
        color: ${lighten(red, 48)};
        font-size: 15px !important;
        text-align: center;
        margin-top: 0.5rem;
        padding: 1.5rem 0 2.5rem;
        font-family: 'Open Sans', sans-serif !important;
      `}
    >
      This website is kept up-to-date with climate data from{` `}
      <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
        NASA
      </a>
      {` `}
      and{` `}
      <a
        href="https://scripps.ucsd.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scripps Institution of Oceanography
      </a>
      <br />
      Altimetry data are provided by the{` `}
      <a
        href="https://www.star.nesdis.noaa.gov/sod/lsa/index.php"
        target="_blank"
        rel="noopener noreferrer"
      >
        NOAA Laboratory for Satellite Altimetry
      </a>
    </div>
  </header>
);

export default Header;
