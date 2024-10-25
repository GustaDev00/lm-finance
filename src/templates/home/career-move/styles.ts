import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { DescriptionWhiteMedium, TitleWhiteMedium } from "@/styles/components/content";
import { ButtonSwipe } from "@/components/atoms/button-swipe";

export const CareerMove = styled.section`
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled(_Wrapper)`
  padding: 24rem 18rem;
  justify-content: space-between;
  align-items: flex-end;

  &::after {
    content: "";
    position: absolute;
    bottom: 11rem;
    width: calc(100% - 36rem);
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.35);
    box-sizing: border-box;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 11rem 6rem 22rem;
    gap: 8.6rem;
    align-items: flex-start;

    &::after {
      width: calc(100% - 12rem);
    }
  `}

  ${mediaMaxWidth("mobile")`
    padding: 14rem 2.2rem 22rem;

    &::after {
      width: calc(100% - 4.4rem);
    }
  `}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 110%;
  object-fit: cover;
  z-index: 0;

  ${mediaMaxWidth("mobile")`
    object-position: -100rem 0rem;
  `}
`;

export const Content = styled.article``;

export const Title = styled.h1`
  ${TitleWhiteMedium}
`;

export const Text = styled.p`
  ${DescriptionWhiteMedium}

  font-weight: 400;
  margin-top: 4.6rem;
`;

export const Button = styled(ButtonSwipe)``;
