import React from 'react';
import { css, ClassNames } from '@emotion/core';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton
} from 'react-share';
import {
  FaRedditAlien,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaShare
} from 'react-icons/fa';

import { red } from '../utils/colors';

const ShareButtons = () => {
  const shareUrl = `https://isearthstillwarming.com`;
  const title = `IsEarthStillWarming.com`;
  const fullTitle = `IsEarthStillWarming.com: Global warming information and data`;

  const share = () =>
    window.navigator.share({
      url: shareUrl,
      text: `Global warming information and data`,
      title
    });

  if (
    typeof window !== `undefined` &&
    window.navigator &&
    window.navigator.share
  ) {
    return (
      <div
        css={css`
          display: flex;
          @media (max-width: 700px) {
            justify-content: center;
          }
          justify-content: flex-end;
          margin-top: 1.5rem;
          margin-bottom: -1.5rem;
        `}
      >
        <button
          type="button"
          css={css`
            font-size: 0.8rem;
            height: 1.75rem;
            padding: 0 0.5rem;
            border-radius: 4px;
            border: none;
            color: ${red};
            border: 1px solid ${red};
            font-weight: bold;
            box-sizing: content-box;
            cursor: pointer;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            :hover {
              opacity: 0.8;
            }
            svg {
              margin-right: 0.4rem;
            }
          `}
          onClick={share}
        >
          <FaShare />
          Share
        </button>
      </div>
    );
  }
  return (
    <ClassNames>
      {({ css: style }) => (
        <div
          css={css`
            margin-bottom: -1rem;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .SocialMediaShareButton {
              cursor: pointer;
              :hover {
                opacity: 0.9;
              }
              margin: 0 0.3rem;
              color: white;
              height: 1.6rem;
              width: 1.6rem;
              font-size: 0.9rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              overflow: hidden;
            }
          `}
        >
          <span
            css={css`
              padding-right: 0.4rem;
            `}
          >
            Share:
          </span>
          <FacebookShareButton
            className={style`
              background-color: #3B579D;
            `}
            url={shareUrl}
            quote={fullTitle}
          >
            <FaFacebookF />
          </FacebookShareButton>
          <TwitterShareButton
            className={style`
              background-color: #2CAAE1;
            `}
            url={shareUrl}
            title={fullTitle}
          >
            <FaTwitter />
          </TwitterShareButton>
          <RedditShareButton
            className={style`
              background-color: #FF4500 !important;
            `}
            title={fullTitle}
            url={shareUrl}
          >
            <FaRedditAlien />
          </RedditShareButton>
          <LinkedinShareButton
            className={style`
              background-color: #007BB6;
            `}
            url={shareUrl}
          >
            <FaLinkedinIn />
          </LinkedinShareButton>
        </div>
      )}
    </ClassNames>
  );
};

export default ShareButtons;
