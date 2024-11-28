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

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 11rem 6rem 22rem;
    gap: 8.6rem;
    align-items: flex-start;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 14rem 2.2rem 22rem;
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

  ${mediaMaxWidth("mobile")`
    font-size: 3rem;
  `}
`;

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 21rem;
  margin-top: 20rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.3);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 0.1rem;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
  }

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
    gap: 6.2rem;
    margin-top: 10rem;

    &::before, &::after {
      display: none;
    }
  `}
`;

export const Item = styled.li`
  ${mediaMaxWidth("mobile")`
    position: relative;

    &:not(:last-child)::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -3.2rem;
      width: 100%;
      height: 0.1rem;
      background: rgba(255, 255, 255, 0.3);
  `}
`;

export const TitleItem = styled.h2`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 8.7rem;
  letter-spacing: -0.1417rem;
  margin-bottom: 2.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    line-height: normal;
  `}
`;

export const TextItem = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.1113rem;
`;
