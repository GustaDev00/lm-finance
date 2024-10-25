import * as S from "../styles";
import C from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Button onClick={handleClick}>
          <S.MenuIcon />
        </S.Button>
      </S.Header>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.Wrapper>
            <S.HeaderModal>
              <S.TextModal>Menu</S.TextModal>
              <S.Close onClick={handleClick} />
            </S.HeaderModal>
            <S.Container>
              <S.List>
                {C.categories.map((link, index) => (
                  <S.Item key={index} $active={pathname === link.href}>
                    <S.Link {...link} onClick={handleClick}>
                      {link.title}
                    </S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Container>
            <S.Line />
            <S.Footer>
              <S.TitleFooter>{C.help}</S.TitleFooter>
              <S.LinkFooter href={C.phone.link}>{C.phone.number}</S.LinkFooter>
              <S.LinkFooter href={C.mail.link}>{C.mail.email}</S.LinkFooter>
              <S.ButtonFooter {...C.hero.button}>{C.hero.button.title}</S.ButtonFooter>
            </S.Footer>
          </S.Wrapper>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </>
  );
};
