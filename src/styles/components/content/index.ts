import { mediaMaxWidth } from "@/utils/media-query";
import { css } from "styled-components";

export const TitleWhiteBig = css`
  color: #fff;
  text-align: center;
  line-height: 8.7rem;
  font-size: 8.4rem;
  font-weight: 300;
  letter-spacing: -0.425rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 42px;
    line-height: 5.4rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const TitleWhiteMedium = css`
  color: #fff;
  font-size: 6.6rem;
  font-weight: 500;
  line-height: 8.7rem;
  letter-spacing: -0.334rem;
  text-transform: uppercase;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 42px;
    line-height: 5.9rem;
    letter-spacing: -0.2125rem;
  `}
`;

export const DescriptionWhiteBig = css`
  color: #fff;
  font-size: 3.4rem;
  font-weight: 400;
  line-height: 5.5rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2rem;
    line-height: 4.2rem;
    letter-spacing: -0.0002rem;
  `}
`;

export const DescriptionWhiteMedium = css`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.0002rem;
`;

export const DescriptionWhiteSmall = css`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 3.4rem;
  letter-spacing: -0.0002rem;
`;

export const subtitleDarkSmall = css`
  color: #131523;
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 8.7rem;
  letter-spacing: -0.1619rem;

  span {
    font-weight: 600;
  }
`;
