import { ArrowDarkIcon, ArrowWhiteIcon } from "@/components/svgs/arrow-down";
import * as S from "./styles";
import { TextArrowAnimationProps } from "./props";

export const TextArrowAnimation = ({ span, href, ...props }: TextArrowAnimationProps) => {
  return !href ? (
    <S.TextArrowAnimation {...props}>
      {span} <ArrowDarkIcon />
    </S.TextArrowAnimation>
  ) : (
    <S.LinkArrowAnimation href={href} {...props}>
      <ArrowWhiteIcon /> {span}
    </S.LinkArrowAnimation>
  );
};
