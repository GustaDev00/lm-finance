import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import _Link from "next/link";

export const Link = styled(_Link)``;

export const Logo = styled(LazyImage)`
  height: 4.9rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    height: 4.2rem;
  `}
`;
