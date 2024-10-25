import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { bg, title, text, button } = C.careerMove;

  return (
    <S.CareerMove>
      <S.Background {...bg} />
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </S.Content>

        <S.Button {...button}>{button.title}</S.Button>
      </S.Wrapper>
    </S.CareerMove>
  );
};
