import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Span = styled.span`
  position: relative;
  left: -3rem;
  transition: left 0.4s ease;
`;

export const Icon = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background: #fff;
  transition: right 0.4s ease, transform 0.4s ease;
`;

const swipeStyles = css`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 1.75rem 7rem;

  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 3.1rem;
  letter-spacing: -0.0002rem;

  border-radius: 3.6rem;
  background: #1a73c6;
  transition: box-shadow 0.3s ease;

  &:hover {
    ${Icon} {
      transform: rotate(-45deg);
      right: calc(80% - 3rem);
    }

    ${Span} {
      left: calc(80% - 4rem);
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 7rem;
  `}
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled(Link)`
  ${swipeStyles}
`;
