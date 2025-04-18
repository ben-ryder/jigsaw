import type { Preview } from '@storybook/react'

import "../src/jigsaw.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'jigsaw', value: 'var(--color-navy-500)' },
      ],
      default: 'jigsaw'
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