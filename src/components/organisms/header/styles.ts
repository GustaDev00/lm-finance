import styled from "styled-components";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { TitleWhite } from "@/styles/components/titles";
import { SubtitleLight } from "@/styles/components/subtitle";
import { Check } from "@/components/svgs/check";
import _Link from "next/link";

export const Header = styled.div<{ $modal?: boolean; $tags?: boolean }>`
  position: relative;
  margin-bottom: ${({ $modal, $tags }) => ($modal ? "44.8rem" : $tags ? "8.8rem" : "0")};

  ${({ $modal }) => mediaMaxWidth("mobile")`
    margin-bottom: ${$modal ? "50rem" : "0"};
    padding-bottom: 0rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 24rem;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;

  ${mediaMaxWidth("mobile")`
    padding-top: 13rem;
    padding-bottom: 5rem;
  `}
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3.4rem;

  ${mediaMaxWidth("mobile")`
    gap: 2rem;
  `}
`;

export const Breadcrumb = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  &::before {
    content: "";
    display: block;
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.9rem solid ${({ theme }) => theme.carnelian};
    transform: rotate(90deg);
  }
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.gainsboro};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &:first-child {
    order: -1;
  }
`;

export const Link = styled(_Link)`
  cursor: pointer;
  text-decoration: underline;
`;

export const Title = styled.h1`
  ${TitleWhite}
`;

export const Description = styled.p`
  ${SubtitleLight}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0rem 0rem;

  ${mediaMaxWidth("mobile")`
    object-position: 35%;
  `}
`;

export const Container = styled.div`
  position: absolute;
  padding: 2.6rem 3.9rem;
  width: 65%;
  top: 120%;
  background: ${({ theme }) => theme.white};
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.black005};
  box-shadow: 0 1.2rem 2.2rem 0 ${({ theme }) => theme.black008};

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 80%;
  `}

  ${mediaMaxWidth("mobile")`
    width: 90%;
    padding: 2.6rem 3.6rem;
    top: 110%;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.0003rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2.2rem;
    line-height: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 3.8rem;
  `}
`;

export const Tags = styled.div`
  display: flex;
  gap: 4.9rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 92%;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Tag = styled.div`
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.black005};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1.2rem 2.2rem 0 ${({ theme }) => theme.black008};

  display: flex;
  padding: 2.8rem 9rem;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;

  color: ${({ theme }) => theme.raisinBlack};
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 3.1rem;
  letter-spacing: -0.0003rem;
`;

export const CheckIcon = styled(Check)`
  width: 3.5rem;
  height: 3.5rem;
`;
