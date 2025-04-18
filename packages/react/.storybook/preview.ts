import type { Preview } from '@storybook/react'

import "../src/tailwind.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Home",
          "Accessibility",
          "Foundations",
          "Atoms",
          "Components",
          "Organisms",
          "Layouts",
        ],
      },
    }
  },
};

export default preview;