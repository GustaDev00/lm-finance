import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import React from "react";

export default () => {
  const { sectionRef } = useAnimation();
  const { bg, title, text, links, button } = C.header;

  return (
    <S.Header ref={sectionRef}>
      <S.Background {...bg} />
      <S.NavDesktop>
        <S.Logo />
        <S.Button {...button}>{button.title}</S.Button>
      </S.NavDesktop>
      <S.Wrapper>
        <S.content>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.ButtonMobile {...button}>{button.title}</S.ButtonMobile>
        </S.content>
        <S.Container>
          <S.Links>
            {links.map((link, i) => (
              <S.Link key={i} {...link} />
            ))}
          </S.Links>
          <S.Share />
        </S.Container>
      </S.Wrapper>
    </S.Header>
  );
};
