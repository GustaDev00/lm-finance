import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { bg, title, info, button, copyrigth } = C.growUp;

  return (
    <S.CareerMove>
      <S.Background {...bg} />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Button {...button}>{button.title}</S.Button>
        <S.Content>
          {info.map((item, index) => (
            <S.Item key={index} {...item}>
              {item.content}
            </S.Item>
          ))}
        </S.Content>
        <S.Share />
        <S.Info>
          <S.Copy>{copyrigth.text}</S.Copy>
          <S.Agency>{copyrigth.fiber}</S.Agency>
        </S.Info>
      </S.Wrapper>
    </S.CareerMove>
  );
};
