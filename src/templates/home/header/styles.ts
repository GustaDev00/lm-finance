import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import {
  DescriptionWhiteMedium,
  DescriptionWhiteSmall,
  TitleWhiteMedium,
} from "@/styles/components/content";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TextArrowAnimation } from "@/components/atoms/text-arrow-animation";
import { SocialShare } from "@/components/atoms/social-share";

export const Header = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 50vh;
  `}

  ${mediaMaxWidth("mobile")`
    height: auto;
  `}
`;

export const NavDesktop = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 3rem 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6rem;
  `}

  ${mediaMaxWidth("mobile")`
    position: relative;
    padding: 3rem 2.2rem;
    overflow: hidden;
  `}
`;

export const Logo = styled(_Logo)``;

export const Button = styled(ButtonSwipe)`
  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13.2rem;
  padding-bottom: 22rem;
  z-index: 1;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.6rem 6rem;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 2.2rem;
  `}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 110%;
  object-fit: cover;
  z-index: 0;

  ${mediaMaxWidth("mobile")`
    object-position: -80rem -10rem;
  `}
`;

export const content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -6.7rem;
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.35);
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    align-items: flex-start;
    gap: 3.8rem;
  `}
`;

export const Title = styled.h1`
  ${TitleWhiteMedium}
`;

export const Text = styled.p`
  ${DescriptionWhiteMedium}

  font-weight: 400;
`;

export const ButtonMobile = styled(ButtonSwipe)`
  display: none;

  ${mediaMaxWidth("mobile")`
    display: flex;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 5rem;
  `}
`;

export const Links = styled.div`
  display: flex;
  gap: 3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 2.4rem;
  `}
`;

export const Link = styled(TextArrowAnimation)``;

export const Share = styled(SocialShare)``;
