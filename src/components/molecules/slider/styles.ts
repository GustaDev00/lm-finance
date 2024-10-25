import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Slide = styled.div`
  width: 100%;
  position: relative;
  margin: auto;

  .swiper-wrapper {
    width: 70rem;
    left: -18rem;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.9) !important;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1) !important;
    right: 1rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 90%;

    .swiper-wrapper {
      width: 100%;
      left: -18rem;
    }
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;

    .swiper-wrapper {
      width: 100%;
      left: -6.7rem;
    }

    .swiper-slide-next,
    .swiper-slide-prev {
      filter: grayscale(100%) blur(0.15rem);
    }
  `}
`;

export const Container = styled.div`
  border-radius: 0.4rem;
`;

export const Img = styled(LazyImage)`
  width: 60.4rem;
  height: 47.6rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 70.4rem;
    height: 57.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 27.4rem;
    height: 38.8rem;
  `}
`;

export const Content = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 10rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 3;

  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 600;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    bottom: 4rem;
    left: 18rem;
    gap: 3rem;

    font-size: 2rem;
  `}

  ${mediaMaxWidth("mobile")`
    bottom: 3rem;
    left: 6rem;
    gap: 1.5rem;

    font-size: 1.6rem;
  `}
`;

export const Total = styled.p``;

export const Current = styled.p``;

export const Line = styled.div`
  width: 4.9rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.gray};
`;

export const Arrow = styled.div`
  cursor: pointer;
  width: 1.3rem;
  height: 1.9rem;

  &::before {
    content: "";
    display: block;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='15' viewBox='0 0 9 15' fill='none'%3E%3Cpath d='M3.35885 1.4807L8.37983 6.72545C8.50104 6.85599 8.56165 7.0075 8.56165 7.18C8.56165 7.35249 8.50104 7.50401 8.37983 7.63454L3.35885 12.8793C3.22832 13.0098 3.07214 13.0774 2.89032 13.0821C2.7085 13.0868 2.55232 13.0262 2.42179 12.9003C2.29125 12.7744 2.22365 12.6206 2.21899 12.4387C2.21433 12.2569 2.27727 12.1007 2.4078 11.9702L6.99521 7.18699L2.4078 2.38979C2.27727 2.25925 2.21433 2.10307 2.21899 1.92126C2.22365 1.73944 2.29125 1.58559 2.42179 1.45972C2.55232 1.33384 2.7085 1.27324 2.89032 1.2779C3.07214 1.28256 3.22832 1.35016 3.35885 1.4807Z' fill='white'/%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    width: 1.3rem;
    height: 1.9rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 2.1rem;
    height: 2.7rem;

    &::before {
      width: 2.1rem;
      height: 2.7rem;
    }
  `}

  ${mediaMaxWidth("mobile")`
    width: 1.1rem;
    height: 1.5rem;

    &::before {
      width: 1.1rem;
      height: 1.5rem;
    }
  `}
`;

export const Prev = styled(Arrow)`
  transform: rotate(180deg);
`;

export const Next = styled(Arrow)`
  margin-left: 2rem;
`;
