import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes';

import "../src/jigsaw.css"
import "./storybook.css"

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        system: 'j-surface-base',
        light: 'j-surface-base j-theme-light',
        dark: 'j-surface-base j-theme-dark',
      },
      defaultTheme: 'system',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: [
          "Home",
          "Structure",
          "Accessibility",
          "Tokens",
          ["Colours", ["All", "Variants", "Surface"]],
          "Atoms",
          "Components",
          "Templates",
        ],
      },
    }
  },
};

export default preview;