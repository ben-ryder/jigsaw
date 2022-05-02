import '../src/tailwind.css';

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
        value: "#272B34"
      }
    ]
  }
}
