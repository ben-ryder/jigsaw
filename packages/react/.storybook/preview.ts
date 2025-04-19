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
        { name: 'jigsaw-dark', value: 'var(--navy-500)' },
        { name: 'jigsaw-light', value: 'var(--grey-50)' },
      ],
      default: 'jigsaw-dark'
    },
    options: {
      storySort: {
        order: [
          "Home",
          "Accessibility",
          "Tokens",
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