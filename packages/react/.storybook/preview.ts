import "../src/base.scss";
import "../src/development.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showPanel: false,
  },
  backgrounds: {
    default: "jigsaw",
    values: [
      {
        name: "jigsaw",
        value: "#242830"
      }
    ]
  }
}
