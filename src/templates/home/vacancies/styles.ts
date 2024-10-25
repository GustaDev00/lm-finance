import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TextArrowAnimation } from "@/components/atoms/text-arrow-animation";
import { SuitcaseIcon } from "@/components/svgs/suitcase";
import { ButtonSwipe } from "@/components/atoms/button-swipe";

export const Vacancies = styled.section`
  position: relative;
  padding: 11rem 0;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 13.5rem;
  padding: 11rem 18rem;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: calc(100% - 36rem);
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.6rem 6rem;
    flex-direction: column;

    &::before {
      width: calc(100% - 12rem);
    }
  `}

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 2.2rem;
    gap: 5rem;

    &::before {
      width: calc(100% - 4.4rem);
    }
  `}
`;

export const Span = styled(TextArrowAnimation)`
  position: relative;
  display: block;
  line-height: 4.2rem;

  svg {
    position: absolute;
    top: 15%;
    transform: translateX(30%);
  }

  ${mediaMaxWidth("mobile")`
    
    svg {
      top: 50%;
      right: -5rem;
      transform: translateY(-40%) translateX(0);
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 4.1rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Img = styled(LazyImage)`
  height: 102rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  column-gap: 4rem;
  row-gap: 6rem;

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
  `}
`;

export const Item = styled.li`
  background: #fff;
  box-shadow: 0 1.2rem 1.6rem 0 rgba(14, 51, 85, 0.05);
  padding: 3.8rem 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LogoSmall = styled.div`
  width: 7.4rem;
  height: 7.4rem;
  border-radius: 50%;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LazyImage)`
  width: 4.5rem;
  height: 4.8rem;
  object-fit: contain;
`;

export const Icon = styled(SuitcaseIcon)`
  width: 3.9rem;
  height: 3.7rem;
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  &::before {
    content: "";
    display: block;
    bottom: -2.5rem;
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  color: var(--Dark-font-1, #131523);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.1417rem;
`;

export const Text = styled.p`
  width: fit-content;
  color: #7e7e7e;
  font-size: 2.4rem;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.1214rem;
  border-radius: 8px;
  padding: 2rem 3.3rem;
  background: #f3f3f3;
`;

export const Footer = styled.div``;

export const Button = styled(ButtonSwipe)``;
