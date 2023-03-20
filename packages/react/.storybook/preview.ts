import "../src/jigsaw.scss";
import "../src/development/development.scss";

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
    storySort: {
      order: ['Home', 'Credits', 'Foundations', 'Atoms', 'Components', 'Templates']
    }
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
