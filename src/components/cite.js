import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import React, { memo } from 'react';
import ReactTooltip from 'react-tooltip';
import { citations } from './reflist';

const Cite = ({ name }) => {
  const citation = citations.find(x => x.name === name);
  const tooltipId = Math.round(Math.random() * 999999999);

  return (
    <sup
      css={css`
        font-weight: regular;
        padding: 0 1px;
      `}
    >
      <a
        data-tip
        data-for={`tooltip-${name}-${tooltipId}`}
        href={`#ref-${name}`}
      >
        {citations.findIndex(x => x.name === name) + 1}
      </a>
      <ReactTooltip
        id={`tooltip-${name}-${tooltipId}`}
        aria-haspopup="true"
        type="dark"
        effect="solid"
        delayHide={500}
        css={css`
          max-width: 350px;
          line-height: 1.5;

          p {
            font-family: 'Open Sans', sans-serif;
            font-size: 12px;
          }
        `}
      >
        <p>{citation.citation}</p>
      </ReactTooltip>
    </sup>
  );
};

Cite.propTypes = { name: PropTypes.string.isRequired };

export default memo(Cite);
