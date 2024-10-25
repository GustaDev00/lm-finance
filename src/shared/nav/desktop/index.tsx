import * as S from "../styles";
import C from "@/constants";
import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Nav>
          <S.List>
            {C.categories.map((category) => (
              <S.Item key={category.title} $active={pathname === category.href}>
                <S.Link href={category.href}>{category.title}</S.Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>

        <S.Content>
          <S.ExternalLink href={C.phone.link}>
            <S.Icon>
              <S.Phone />
            </S.Icon>
            {C.phone.number}
          </S.ExternalLink>

          <S.ExternalLink href={C.mail.link}>
            <S.Icon>
              <S.Mail />
            </S.Icon>
            {C.mail.email}
          </S.ExternalLink>
        </S.Content>
      </S.Header>
    </>
  );
};
