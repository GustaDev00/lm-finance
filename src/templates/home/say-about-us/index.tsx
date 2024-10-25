import React, { useEffect, useState } from "react";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { ResponsiveElement } from "@/utils/responsive-element";

export default () => {
  const { isInView, ref } = useAnimation();
  const { span, bg, list } = C.sayAboutUs;
  const [pos, setPos] = useState(2);
  const [start, setStart] = useState(false);

  const handleArrow = (direction: "left" | "right") => {
    setStart(false);

    if (direction === "left") {
      setPos((prev) => (prev - 1 + list.length) % list.length);
    } else {
      setPos((prev) => (prev + 1) % list.length);
    }

    setTimeout(() => {
      setStart(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setPos((prev) => (prev + 1) % list.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [pos]);

  useEffect(() => {
    if (isInView && !start) {
      setStart(true);
    }
  }, [isInView, start]);

  return (
    <S.AboutUs ref={ref}>
      <S.Wrapper>
        <S.Span span={span} />
        <ResponsiveElement
          content={<S.Imagem {...bg.desktop} />}
          breakpoints={{ mobile: <S.Imagem {...bg.mobile} /> }}
        />
        <S.Slide>
          <S.Progress duration={8} color="white" isActive={start} />
          <S.Content>
            {list.map((item, i) => (
              <S.Article key={i} $active={i === pos}>
                <S.Text>{item}</S.Text>
              </S.Article>
            ))}
            <S.Arrows>
              <S.ArrowLeft onClick={() => handleArrow("right")}>
                <S.Icon />
              </S.ArrowLeft>
              <S.ArrowRight onClick={() => handleArrow("right")}>
                <S.Icon />
              </S.ArrowRight>
            </S.Arrows>
          </S.Content>
        </S.Slide>
      </S.Wrapper>
    </S.AboutUs>
  );
};
