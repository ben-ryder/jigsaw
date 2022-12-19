import {defineCustomElements} from '../loader';
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "jigsaw",
    values: [
      {
        name: "jigsaw",
        value: "#242830"
      }
    ]
  },
  options: {
    storySort: {
      order: [
        "Home",
        "Design Tokens",
        "Foundations",
        [
          "Identity",
          "Colours",
          "Typography",
          "Spacing and Size",
          "Borders",
          "Elevation",
          "Motion",
          "Layout"
        ],
        "Components",
        "Templates",
        "Credits"
      ]
    }
  }
}
