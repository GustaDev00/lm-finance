import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "@/constants";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";

export default () => {
  const { contact } = C;
  const [isModalOpen, setIsModalOpen] = useState({
    isActive: false,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });
  const [loading, setLoading] = useState(false);

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch (error) {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} />
      </S.Modal>

      <S.Contact>
        <S.Wrapper>
          <S.Title>{contact.title}</S.Title>
          <S.Subtitle>{contact.subtitle}</S.Subtitle>
          <S.Container>
            <S.Form onSubmit={formik.handleSubmit}>
              {contact.form.inputs.map((input, index) => (
                <S.Label
                  key={index}
                  $gridName={input.name}
                  $error={Boolean(
                    formik.touched[input.name as keyof SendMailRequest] &&
                      formik.errors[input.name as keyof SendMailRequest],
                  )}
                >
                  <S.TextInput>{input.label}</S.TextInput>
                  {input.type === "textarea" ? (
                    <S.TextArea
                      {...formik.getFieldProps(input.name)}
                      placeholder={input.placeholder}
                      name={input.name}
                    />
                  ) : (
                    <S.Input
                      {...formik.getFieldProps(input.name)}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                    />
                  )}
                </S.Label>
              ))}
              <S.Button type="submit">
                {contact.form.button} {loading && "..."}
              </S.Button>
            </S.Form>
            <S.Content>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.277361095125!2d9.049289477659498!3d47.05440927114459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47852d0ad5690bd1%3A0xadb75cd9252317d6!2sLerchenstrasse%2022%2C%208754%20Netstal%2C%20Su%C3%AD%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1727842798690!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ borderRadius: "4px", border: "0.4rem solid white" }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </S.Content>
          </S.Container>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
