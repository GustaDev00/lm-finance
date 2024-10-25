import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 11rem 18rem;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.6rem 6rem;
    flex-direction: column;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 2.2rem;
  `}
`;
