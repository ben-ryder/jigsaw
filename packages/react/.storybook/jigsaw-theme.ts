import { create } from "@storybook/theming";

export default create({
  base: "dark",
  brandTitle: "Jigsaw",
  brandUrl: "https://github.com/ben-ryder/jigsaw",
  brandTarget: "_self",

  // Main Colours
  colorPrimary: "#0a766d",
  colorSecondary: "#0a766d",

  // UI
  appBg: "#2D303E",
  appContentBg: "#232530",
  appBorderColor: "#454f5f",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#ccc",
  textInverseColor: "#ccc",

  // Toolbar default and active colors
  barTextColor: "#ccc",
  barSelectedColor: "#0a766d",
  barBg: "#2b2e3b",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
});
