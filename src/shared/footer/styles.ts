import styled, { css } from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { Mail as _Mail } from "@/components/svgs/mail";
import { Phone as _Phone } from "@/components/svgs/phone";
import { Pin as _Pin } from "@/components/svgs/pin";
import { Brush } from "@/components/svgs/brush";
import { TitleSmall } from "@/styles/components/titles";
import { SubtitleDark } from "@/styles/components/subtitle";
import _Link from "next/link";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.eerieBlackHalf};
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 8rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Line01 = styled.div`
  border-radius: 6.4rem;
  background: ${({ theme }) => theme.white};
  width: 100%;
  padding: 4.2rem 14.2rem;
  display: flex;
  justify-content: space-between;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 4.2rem 2.4rem;
    border-radius: 2.4rem;
  `}
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
  `}
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const TextList = styled.p`
  color: ${({ theme }) => theme.romanSilver};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.0001rem;

  span {
    margin-top: 1rem;
    color: ${({ theme }) => theme.outerSpace};
    font-size: 2rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.0002rem;
  }

  ${mediaMaxWidth("mobile")`
    width: 62%;
  `}
`;

export const Icon = styled.div`
  width: 5.9rem;
  height: 5.9rem;
  border: 0.1rem solid ${({ theme }) => theme.rosewood015};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    fill: ${({ theme }) => theme.rosewood};
  }
`;

export const Mail = styled(_Mail)`
  width: 2.4rem;
  height: 1.4rem;
`;

export const Phone = styled(_Phone)`
  width: 2rem;
  height: 2rem;
`;

export const Pin = styled(_Pin)`
  width: 1.6rem;
  height: 2.3rem;
`;

export const Line02 = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10rem;

  padding: 8rem 0;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.white02};
  }

  &::after {
    top: auto;
    bottom: 0;
  }

  ${mediaMaxWidth("mobile")`
    padding: 4rem 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4rem;
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${mediaMaxWidth("mobile")`
    gap: 1.6rem;
  `}
`;

export const BrushIcon = styled(Brush)`
  path {
    fill: ${({ theme }) => theme.white};
  }
`;

export const Title02 = styled.h2`
  ${TitleSmall}

  color: ${({ theme }) => theme.white};
`;

export const Subtitle02 = styled.p`
  ${SubtitleDark}
`;

export const Lines = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Line = styled.div`
  width: 2.1rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.white};
  border-radius: 0.4rem;
`;

export const LineSmall = styled(Line)``;

export const LineBig = styled(Line)`
  width: 3.7rem;
`;

export const ColumnList = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const List02 = styled.ul`
  ${SubtitleDark}

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListItem02 = styled.li``;

export const Link02 = styled(_Link)``;

export const Info = styled.div`
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;

export const Logo = styled(_Logo)``;
