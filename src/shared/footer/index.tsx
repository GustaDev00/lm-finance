import * as S from "./styles";
import C from "@/constants";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Line01>
          <S.Logo />

          <S.List>
            <S.ListItem>
              <S.Link href={C.phone.link}>
                <S.Icon>
                  <S.Phone />
                </S.Icon>
                <S.TextList>
                  {C.phone.text}
                  <br />
                  <span>{C.phone.number}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={C.mail.link}>
                <S.Icon>
                  <S.Mail />
                </S.Icon>
                <S.TextList>
                  {C.mail.text}
                  <br />
                  <span>{C.mail.email}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={C.location.link}>
                <S.Icon>
                  <S.Pin />
                </S.Icon>
                <S.TextList>
                  {C.location.text}
                  <br />
                  <span>{C.location.address}</span>
                </S.TextList>
              </S.Link>
            </S.ListItem>
          </S.List>
        </S.Line01>

        <S.Line02>
          <S.Column>
            <S.BrushIcon />
            <S.Title02>{C.footer.title}</S.Title02>
            <S.Subtitle02>{C.footer.description}</S.Subtitle02>
          </S.Column>

          <S.ColumnList>
            <S.Title02>{C.footer.categoriesText}</S.Title02>
            <S.List02>
              {C.categories.map((category, index) => (
                <S.ListItem02 key={index}>
                  <S.Link02 {...category}>{category.title}</S.Link02>
                </S.ListItem02>
              ))}
            </S.List02>
          </S.ColumnList>

          <S.Column>
            <S.Title02>{C.footer.servicesText}</S.Title02>
            <S.List02>
              {C.footer.categories.map((title, index) => (
                <S.ListItem02 key={index}>{title}</S.ListItem02>
              ))}
            </S.List02>
          </S.Column>
        </S.Line02>

        <S.Info>
          <S.Copy>{C.footer.copyrigth.text}</S.Copy>
          <S.Agency>{C.footer.copyrigth.fiber}</S.Agency>
        </S.Info>
      </S.Wrapper>
    </S.Footer>
  );
};
