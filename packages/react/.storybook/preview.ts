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
      order: [
        "Home",
        "Statuses",
        "Credits",
        "Foundations",
        "Atoms",
        "Components",
        "Layouts",
      ],
    },
  },
  backgrounds: {
    default: "jigsaw",
    values: [
      {
        name: "jigsaw",
        value: "#242830",
      },
    ],
  },
  status: {
    statuses: {
      experimental: {
        background: "#df3333",
        color: "#fff",
        description: "This is experimental and unstable",
      },
      unstable: {
        background: "#e1762b",
        color: "#fff",
        description: "This is ready for initial use but may change",
      },
      stable: {
        background: "#3d854d",
        color: "#fff",
        description: "This is stable and released",
      },
      deprecated: {
        background: "#df3333",
        color: "#fff",
        description: "This is deprecated and should no longer be used",
      },
    },
  },
};
