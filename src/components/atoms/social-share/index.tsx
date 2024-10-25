import * as S from "./styles";
import C from "@/constants";

export const SocialShare = () => {
  const share = C.share;

  return (
    <S.SocialShare>
      {share.map(({ href, title, icon: Icon }, i) => (
        <S.ShareLink key={i} href={href} title={title}>
          <Icon />
        </S.ShareLink>
      ))}
    </S.SocialShare>
  );
};
