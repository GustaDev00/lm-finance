import "styled-components";

export const theme = {
  liverOrgan: "#76341E",
  gainsboro: "#DBDBDB",
  oriolesOrange: "#FF5119",
  romanSilver: "#7E8C99",
  antiFlashWhite: "#F0F0F0",
  eerieBlack: "#131523",
  eerieBlackHalf: "#16191B",
  darkCharcoal: "#313131",
  oldSilver: "#858585",
  carnelian: "#AE1717",
  blackCoral: "#566066",
  alabamaCrimson: "#AD0018",
  outerSpace: "#404A53",
  rosewood: "#670210",
  blue015: "rgba(12, 66, 97, 0.15)",
  rosewood015: "rgba(103, 2, 16, 0.15)",
  gray: "#7C7C7C",
  platinum: "#DEE2E6",
  cultured: "#F5F5F5",
  grayx11: "#BABABA",
  raisinBlack: "#202020",
  metallicSilver: "#A6AFB5",
  chineseBlack: "#141111",
  green: "#2ECC71",
  redForm: "#E74C3C",
  black: "#000",
  black01: "rgba(0, 0, 0, 0.1)",
  black03: "rgba(0, 0, 0, 0.3)",
  black05: "rgba(0, 0, 0, 0.5)",
  black005: "rgba(0, 0, 0, 0.05)",
  black008: "rgba(0, 0, 0, 0.08)",
  black012: "rgba(0, 0, 0, 0.12)",
  black015: "rgba(0, 0, 0, 0.15)",
  black025: "rgba(0, 0, 0, 0.25)",
  blackLinear: "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 28.5%, rgba(0, 0, 0, 0.75) 100%)",
  white: "#fff",
  white02: "rgba(255, 255, 255, 0.2)",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
