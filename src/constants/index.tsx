import { CustomBr } from "@/components/atoms/custom-br";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default {
  share: [
    {
      href: "https://web.facebook.com/LMFinanceAG?_rdc=1&_rdr#",
      icon: FaFacebookF,
      title: "Facebook",
    },
    { href: "https://www.tiktok.com/@lmfinance.ag", icon: FaTiktok, title: "Tiktok" },
    { href: "https://www.instagram.com/lmfinance.ag/", icon: FaInstagram, title: "Instagram" },
    { href: "https://www.linkedin.com/company/lm-finance-ag", icon: FaLinkedin, title: "Linkedin" },
  ],
  header: {
    bg: {
      src: "/imgs/header/bg.png",
      alt: "bg",
    },
    title: (
      <>
        Dein nächster
        <br /> Karriereschritt
        <CustomBr byViewport="desktop" /> beginnt hier!
      </>
    ),
    text: (
      <>
        Werde Teil eines führenden
        <CustomBr byViewport="mobile" /> Finanz- und
        <CustomBr byViewport="desktop" /> Versicherungsunternehmens,
        <CustomBr byViewport="mobile" /> das für Vertrauen,
        <CustomBr byViewport="desktop" /> Flexibilität
        <CustomBr byViewport="mobile" /> und persönliche
        <CustomBr byViewport="mobile" /> Weiterentwicklung steht.
        <br />
        Starte deine Bewerbung und
        <CustomBr byViewport="mobile" /> gestalte mit uns die
        <CustomBr byViewport="desktop" /> Zukunft!
      </>
    ),
    links: [
      { title: "Unternehmen", span: "Unternehmen", href: "/#vacancies" },
      { title: "Offene stellen", span: "Offene stellen", href: "/#vacancies" },
    ],
    button: { title: "Bewerben", href: "#" },
  },
  aboutUs: {
    title: (
      <>
        <span>L&M Finance AG</span>
        <CustomBr byViewport="mobile" /> ist ein führendes Schweizer
        <CustomBr byViewport="desktop" /> Unternehmen im Finanz- und Versicherungssektor.
      </>
    ),
    text: (
      <>
        Wir stehen für Vertrauen, Flexibilität und persönliche Weiterentwicklung. Mit uns arbeitest
        <CustomBr byViewport="desktop" />
        du in einem Team, das Engagement schätzt, Verantwortung überträgt und individuelle
        <CustomBr byViewport="desktop" /> Stärken fördert. Unsere Mission? Menschen finanziell
        abzusichern, damit sie sorgenfrei in
        <CustomBr byViewport="desktop" /> die Zukunft blicken können. Gemeinsam gestalten wir die
        Finanzwelt von morgen – bist du
        <CustomBr byViewport="desktop" /> dabei?
      </>
    ),
    span: "Das sind wir",
    imgs: [
      { src: "/imgs/about-us/img1.png", title: "img1", alt: "img1" },
      { src: "/imgs/about-us/img2.png", title: "img2", alt: "img2" },
    ],
  },
  careerMove: {
    bg: {
      src: "/imgs/career-move/bg.png",
      alt: "bg",
    },
    title: (
      <>
        Dein Karriereschritt
        <CustomBr byViewport="desktop" /> wartet auf dich!
      </>
    ),
    text: (
      <>
        Werde Teil eines führenden Finanz- und Versicherungsunternehmens,
        <CustomBr byViewport="desktop" /> das für Vertrauen, Flexibilität und persönliche
        Weiterentwicklung steht.
        <CustomBr byViewport="desktop" /> Starte deine Bewerbung und gestalte mit uns die Zukunft!
      </>
    ),
    button: { title: "Bewerben", href: "#" },
  },
  advantages: {
    span: (
      <>
        Deine Vorteile bei <span>L&M Finance AG</span>
      </>
    ),
    list: [
      {
        bg: {
          src: "/imgs/advantages/img1.png",
          alt: "img1",
        },
        title: <>Attraktive Vergütung</>,
        text: (
          <>
            Leistung wird belohnt – mit
            <CustomBr byViewport="desktop" /> gutem Gehalt und
            <CustomBr byViewport="desktop" /> Karrieremöglichkeiten.
          </>
        ),
      },
      {
        bg: {
          src: "/imgs/advantages/img2.png",
          alt: "img2",
        },
        title: <>Flexibilität</>,
        text: (
          <>
            Eigenverantwortung und
            <CustomBr byViewport="desktop" /> flexible Arbeitszeiten geben dir
            <CustomBr byViewport="desktop" /> Freiraum.
          </>
        ),
      },
      {
        bg: {
          src: "/imgs/advantages/img3.png",
          alt: "img3",
        },
        title: <>Förderung</>,
        text: (
          <>
            Regelmässige Weiterbildungen,
            <CustomBr byViewport="desktop" /> damit du dich stetig
            <CustomBr byViewport="desktop" /> weiterentwickeln kannst.
          </>
        ),
      },
    ],
  },
  sayAboutUs: {
    span: (
      <>
        Was sagen sie{" "}
        <span>
          über
          <CustomBr byViewport="mobile" /> uns?
        </span>
      </>
    ),
    bg: {
      desktop: {
        src: "/imgs/say-about-us/bg.png",
        alt: "bg",
      },
      mobile: {
        src: "/imgs/say-about-us/mobile/bg.png",
        alt: "bg-mobile",
      },
    },
    list: [
      <>
        “<strong>L&M Finance AG</strong> gibt mir echte Verantwortung, spannende
        <CustomBr byViewport="desktop" /> Projekte und fördert meine Karriere – hier wird es nie
        <CustomBr byViewport="desktop" />
        langweilig! ”
      </>,
      <>
        “<strong>L&M Finance AG</strong> gibt mir echte Verantwortung, spannende
        <CustomBr byViewport="desktop" />
        Projekte und ein Team, das wie eine Familie hinter mir steht –
        <CustomBr byViewport="desktop" /> hier wird es nie langweilig!”
      </>,
      <>
        “<strong>L&M Finance AG</strong> war der perfekte Karrierestart für mich. Ich
        <CustomBr byViewport="desktop" /> übernehme Verantwortung für spannende Projekte, bilde mich
        <CustomBr byViewport="desktop" />
        stetig weiter und arbeite in einem Team, das mich immer
        <CustomBr byViewport="desktop" /> unterstützt!”
      </>,
      <>
        “Was mich bei <strong>L&M Finance AG</strong> begeistert, ist die Freiheit, an
        <CustomBr byViewport="desktop" /> komplexen Projekten zu arbeiten, ohne allein dazustehen.
        <CustomBr byViewport="desktop" /> Weiterbildung wird gefördert, und das Team unterstützt
        mich <CustomBr byViewport="desktop" />
        immer, wenn ich es brauche.”
      </>,
    ],
  },
  selectionProcess: {
    bg: {
      src: "/imgs/selection-process/bg.png",
      alt: "bg",
    },
    title: (
      <>
        Erfahren Sie mehr über unseren
        <br /> Bewerbungsprozess
      </>
    ),
    list: [
      {
        title: <>1. Online bewerben via AI Assistent</>,
        text: (
          <>
            Starten Sie den Bewerbungsprozess
            <CustomBr byViewport="desktop" /> bequem online. Unser AI Assistent führt Sie
            <CustomBr byViewport="desktop" /> durch die ersten Schritte und sammelt alle
            <CustomBr byViewport="desktop" /> relevanten Informationen für
            <CustomBr byViewport="desktop" /> Ihre Bewerbung – einfach, schnell
            <CustomBr byViewport="desktop" /> und unkompliziert.
          </>
        ),
      },
      {
        title: <>2. Erstgespräch</>,
        text: (
          <>
            In einem ersten Gespräch lernen wir uns
            <CustomBr byViewport="desktop" /> kennen und besprechen Ihre Karriereziele.
            <CustomBr byViewport="desktop" /> Hier haben Sie die Möglichkeit, mehr über
            <CustomBr byViewport="desktop" /> L&M Finance AG zu erfahren und
            <CustomBr byViewport="desktop" /> offene Fragen zu klären.
          </>
        ),
      },
      {
        title: <>3. Bewerbungsgespräch</>,
        text: (
          <>
            Im Bewerbungsgespräch geht es tiefer in
            <CustomBr byViewport="desktop" /> Ihre Qualifikationen und die Position, für die
            <CustomBr byViewport="desktop" /> Sie sich bewerben. Wir besprechen Ihre{" "}
            <CustomBr byViewport="desktop" />
            Stärken und wie Sie unser Team bereichern <CustomBr byViewport="desktop" />
            können.
          </>
        ),
      },
      {
        title: <>4. Willkommen im Team</>,
        text: (
          <>
            Herzlichen Glückwunsch! Wenn alles passt,
            <CustomBr byViewport="desktop" /> heissen wir Sie herzlich willkommen im
            <CustomBr byViewport="desktop" /> Team von L&M Finance AG. Gemeinsam
            <CustomBr byViewport="desktop" /> starten wir in Ihre neue berufliche Zukunft.
          </>
        ),
      },
    ],
  },
  vacancies: {
    span: <>Offene Stellen</>,
    cards: [
      {
        title: (
          <>
            Führungskraft
            <CustomBr byViewport="mobile" /> Aussendienst
          </>
        ),
        text: <>per sofort 100 %</>,
        button: { title: "Bewerben", href: "#" },
      },
      {
        title: (
          <>
            Kundenberater im
            <CustomBr byViewport="mobile" /> Aussendienst
          </>
        ),
        text: <>per sofort 100 %</>,
        button: { title: "Bewerben", href: "#" },
      },
      {
        title: (
          <>
            Praktikant im
            <CustomBr byViewport="mobile" /> Innendienst
          </>
        ),
        text: <>per sofort 100 %</>,
        button: { title: "Bewerben", href: "#" },
      },
      {
        title: (
          <>
            Lehrstelle als
            <CustomBr byViewport="mobile" /> Kauffrau /<CustomBr byViewport="mobile" /> Kaufmann EFZ
            <CustomBr byViewport="desktop" /> im
            <CustomBr byViewport="mobile" /> Bereich
            <CustomBr byViewport="mobile" /> Finanzdienstleistungen
          </>
        ),
        text: <>per August 2025</>,
        button: { title: "Bewerben", href: "#" },
      },
    ],
    logo_small: {
      src: "/imgs/vacancies/logo_small.png",
      alt: "logo_small",
    },
    img: {
      src: "/imgs/vacancies/img.png",
      alt: "img",
    },
  },
  growUp: {
    bg: {
      src: "/imgs/grow-up/bg.png",
      alt: "bg",
    },
    title: <>Lass uns gemeinsam gross werden!</>,
    button: { title: "Bewirb dich jetzt", href: "#" },
    info: [
      { content: "+41782619466", href: "tel:+41782619466", title: "Telefon" },
      { content: "info@lm-finance.ch", href: "mailto:info@lm-finance.ch", title: "E-Mail" },
    ],
    copyrigth: {
      text: <>Copyright © 2024 L&M Finance AG</>,
      fiber: (
        <>
          Mit 💚 entwickelt von <a href="https://www.fiberweb.ch/">FiberWeb.ch</a>
        </>
      ),
    },
  },
};
