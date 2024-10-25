import * as S from "./styles";
import useAnimation from "./animation";
import { ButtonTransparentProps } from "./props";

export const ButtonTransparent = ({ title, href, className }: ButtonTransparentProps) => {
  useAnimation();

  return (
    <S.Button href={href} title={title} className={className} data-timeline="button">
      <S.Text>{title}</S.Text>
    </S.Button>
  );
};
