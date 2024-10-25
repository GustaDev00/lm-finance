import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TitleWhiteMedium } from "@/styles/components/content";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { SocialShare } from "@/components/atoms/social-share";

export const CareerMove = styled.section`
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled(_Wrapper)`
  padding: 24rem 18rem 7.2rem;
  flex-direction: column;
  align-items: center;
  gap: 7rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 11rem 6rem 7.2rem;
    gap: 8.6rem;
    align-items: flex-start;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 14rem 2.2rem 7.2rem;
    align-items: center;
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

export const Title = styled.h1`
  ${TitleWhiteMedium}

  ${mediaMaxWidth("mobile")`
    text-align: center;
  `}
`;

export const Button = styled(ButtonSwipe)``;

export const Content = styled.article`
  display: flex;
  gap: 2rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    justify-content: center;
    text-align: center;
  `}
`;

export const Item = styled.a`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.0002rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  border-radius: 3.7rem;
  padding: 2rem 10rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2rem 6rem;
    text-align: center;
  `}
`;

export const Share = styled(SocialShare)``;

export const Info = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3.9rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  color: #e3e3e3;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 140%;
  padding-bottom: 7.2rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #e3e3e3;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column-reverse;
    align-items: flex-center;
    text-align: center;
    margin-top: 3rem;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  color: #e3e3e3;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 140%;

  a {
    font-weight: 700;
  }
`;
