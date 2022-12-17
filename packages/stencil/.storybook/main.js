module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },
  "core": {
    disableTelemetry: true
  },
  staticDirs: ['../www'],
  // docs: {
  //   docsPage: "automatic"
  // }
};
