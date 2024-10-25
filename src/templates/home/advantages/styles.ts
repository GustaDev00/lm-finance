import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TextArrowAnimation } from "@/components/atoms/text-arrow-animation";

export const AboutUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 13.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 8.6rem;
    padding-top: 11rem;
    padding-bottom: 11rem;
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
      right: 0rem;
      transform: translateY(-40%) translateX(0);
    }
  `}
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const Item = styled.li`
  position: relative;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 48rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 51rem;
  `}
`;

export const Article = styled.article`
  position: absolute;
  padding: 4.5rem 3.2rem 7.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    bottom: 4.5rem;
    width: calc(100% - 6.4rem);
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.35);
  }
`;

export const Bg = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleItem = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 8.7rem;
  letter-spacing: -0.1619rem;
`;

export const TextItem = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 3.4rem;
  letter-spacing: -0.0002rem;
`;
