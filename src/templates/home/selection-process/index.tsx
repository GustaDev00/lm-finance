import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { bg, title, list } = C.selectionProcess;

  return (
    <S.CareerMove>
      <S.Background {...bg} />
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.List>
            {list.map((item, i) => (
              <S.Item key={i}>
                <S.TitleItem>{item.title}</S.TitleItem>
                <S.TextItem>{item.text}</S.TextItem>
              </S.Item>
            ))}
          </S.List>
        </S.Content>
      </S.Wrapper>
    </S.CareerMove>
  );
};
