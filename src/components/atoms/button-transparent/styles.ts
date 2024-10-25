import styled from "styled-components";
import _Link from "next/link";

export const Button = styled(_Link)`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
  padding: 1.3rem 4.1rem;
  border: 0.1rem solid ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.white};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  transition: background 0.4s ease, color 0.4s ease;

  &:hover {
    background: ${({ theme }) => theme.white02};
    color: ${({ theme }) => theme.white};
  }
`;

export const Text = styled.span`
  position: relative;
  right: 0;
  transition: right 0.4s ease;
`;
