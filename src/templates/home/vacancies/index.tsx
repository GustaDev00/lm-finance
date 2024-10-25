import * as S from "./styles";
import C from "@/constants";
import React from "react";

export default () => {
  const { span, cards, img, logo_small } = C.vacancies;

  return (
    <S.Vacancies>
      <S.Wrapper id="vacancies">
        <S.Span span={span} />
        <S.Content>
          <S.Img {...img} />
          <S.List>
            {cards.map(({ title, text, button }, index) => (
              <S.Item key={index}>
                <S.Header>
                  <S.LogoSmall>
                    <S.Logo {...logo_small} />
                  </S.LogoSmall>
                  <S.Icon />
                </S.Header>
                <S.Main>
                  <S.Title>{title}</S.Title>
                  <S.Text>{text}</S.Text>
                </S.Main>
                <S.Footer>
                  <S.Button {...button}>{button.title}</S.Button>
                </S.Footer>
              </S.Item>
            ))}
          </S.List>
        </S.Content>
      </S.Wrapper>
    </S.Vacancies>
  );
};
