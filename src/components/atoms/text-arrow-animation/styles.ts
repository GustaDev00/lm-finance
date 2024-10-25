import styled, { css } from "styled-components";

export const TextCss = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #fff;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.1rem;
  letter-spacing: -0.0003rem;
`;

export const TextArrowAnimation = styled.p`
  ${TextCss}

  color: #131523;
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 8.7rem;
  letter-spacing: -0.1619rem;

  span {
    font-weight: 500;
  }
`;

export const LinkArrowAnimation = styled.a`
  position: relative;

  ${TextCss}

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -2%;
    width: 0%;
    height: 0.15rem;
    background: rgba(255, 255, 255, 0.2);
    transition: width 0.4s ease;
  }

  svg {
    transition: transform 0.4s ease;
  }

  &:hover {
    &::before {
      width: 102%;
    }

    svg {
      transform: rotate(-45deg);
    }
  }
`;
