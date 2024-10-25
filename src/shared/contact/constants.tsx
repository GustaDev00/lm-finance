import { CustomBr } from "@/components/atoms/custom-br";

export default {
  content: {
    title: (
      <>
        Kostenlose <CustomBr byViewport="mobile" />
        Beratung <br />
        anfordern
      </>
    ),
    img: {
      desktop: {
        src: "imgs/contact/img.png",
        alt: "Kontakt",
      },
      mobile: {
        src: "imgs/contact/mobile/img.png",
        alt: "Kontakt",
      },
    },
    Certificate: {
      src: "imgs/contact/quality1.png",
      alt: "Qualität",
    },
    text: (
      <>
        Unsere Partner sind die Besten <CustomBr byViewport="mobile" />
        der Branche
      </>
    ),
    clients: [
      {
        src: "imgs/contact/implenia1.jpg",
        alt: "implenia",
      },
      {
        src: "imgs/contact/gipser1.png",
        alt: "gipser",
      },
    ],
  },

  form: [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "z.B. Jonn Wyss",
    },
    {
      label: "Nummer",
      type: "text",
      name: "phone",
      placeholder: "+41 00 000 00 00",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Jonn@gmail.com",
    },
    {
      label: "Gewünschter Service",
      type: "textarea",
      name: "message",
      placeholder: "Ich hätte gerne eine Offerte bezüglich…",
    },
  ],
  button: "Kontakt",
};
