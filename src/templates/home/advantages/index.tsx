import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { span, list } = C.advantages;

  return (
    <S.AboutUs>
      <S.Wrapper>
        <S.Span span={span} />
        <S.List>
          {list.map((item, i) => (
            <S.Item key={i}>
              <S.Bg {...item.bg} />
              <S.Article>
                <S.TitleItem>{item.title}</S.TitleItem>
                <S.TextItem>{item.text}</S.TextItem>
              </S.Article>
            </S.Item>
          ))}
        </S.List>
      </S.Wrapper>
    </S.AboutUs>
  );
};
