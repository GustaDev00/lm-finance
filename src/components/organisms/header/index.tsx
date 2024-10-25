import * as S from "./styles";
import { HeaderProps } from "./props";
import useAnimation from "./animations";

export const Header = ({
  title,
  description,
  modal,
  background,
  breadcrumb,
  tags,
}: HeaderProps) => {
  const { headerRef } = useAnimation();

  return (
    <S.Header $modal={!!modal} $tags={!!tags} ref={headerRef}>
      <S.Background {...background} />
      <S.Wrapper>
        <S.Content>
          <S.Breadcrumb data-timeline="breadcrumb">
            <S.Item>
              <S.Link href="/">Home</S.Link>
            </S.Item>
            <S.Item>{breadcrumb}</S.Item>
          </S.Breadcrumb>
          <S.Title>{title}</S.Title>
          {description && <S.Description id="descriptionHeader">{description}</S.Description>}
        </S.Content>

        {modal?.content && (
          <S.Container data-timeline="modal">
            <S.Text>{modal.content}</S.Text>
          </S.Container>
        )}

        {tags && (
          <S.Tags>
            {tags.content.map((tag, index) => (
              <S.Tag key={index}>
                {tag} <S.CheckIcon />
              </S.Tag>
            ))}
          </S.Tags>
        )}
      </S.Wrapper>
    </S.Header>
  );
};
