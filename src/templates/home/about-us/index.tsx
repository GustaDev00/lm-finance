import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { span, title, text, imgs } = C.aboutUs;

  return (
    <S.AboutUs>
      <S.Wrapper>
        <S.Span span={span} />
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
          <S.Imgs>
            {imgs.map((img, i) => (
              <S.Img key={i} {...img} />
            ))}
          </S.Imgs>
        </S.Content>
      </S.Wrapper>
    </S.AboutUs>
  );
};
