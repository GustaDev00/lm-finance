import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { Logo as _Logo } from "@/components/atoms/logo";
import { TextArrowAnimation } from "@/components/atoms/text-arrow-animation";

export const AboutUs = styled.section``;

export const Wrapper = styled(_Wrapper)`
  justify-content: space-between;
  align-items: flex-start;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 8.6rem;
  `}
`;

export const Content = styled.article``;

export const Title = styled.h2`
  color: var(--Dark-font-1, #131523);
  font-size: 3.9rem;
  font-weight: 300;
  line-height: 5.5rem;
  letter-spacing: -0.0004rem;

  span {
    color: var(--Dark-font-1, #032146);
    font-weight: 700;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 3.5rem;
    line-height: 4.2rem;
  `}
`;

export const Text = styled.p`
  color: var(--Dark-font-1, #131523);
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 4.1rem;
  letter-spacing: -0.0002rem;
  margin: 4.4rem 0 5.2rem;
`;

export const Imgs = styled.div`
  display: flex;
  gap: 2.3rem;

  &:first-child img {
    width: 57.8rem;
  }

  &:last-child img {
    width: 41.5rem;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;

    &:first-child img, &:last-child img {
      width: 100%;
    }
  `}
`;

export const Img = styled(LazyImage)`
  height: 42.1rem;
  object-fit: cover;
`;

export const Span = styled(TextArrowAnimation)``;
