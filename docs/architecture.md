# Architecture

## Basic Details
Jigsaw is made of different packages. As with any component library and design system there
are multiple different parts to Jigsaw:
- Documentation:
  - Developer docs are in the repo `docs` folder.
  - Design System docs are developed in `packages/react` using Storybook and are published to https://jigsaw.benryder.dev.
- Styling/CSS:
  - Styling is written using SASS in `.scss` files and CSS variables are used for *almost* everything.
  - For ease of development, styles are developed in `packages/react` however
  they are published to `@ben-ryder/jigsaw` via `packages/core`.
- Assets (fonts etc):
  - These are handled the exact same way as CSS, managed in `packages/react` but published to `@ben-ryder/jigsaw` via `packages/core`..
- Component Functionality (JS):
  - A React component library is developed in `packages/react` and published to `@ben-ryder/jigsaw-react`. This does
  not include the styling or assets as those are published in `@ben-ryder/jigsaw`.

## Reasoning
The main reason that I've picked this structure is that I want the core design system to be separate from any implementation (such as the React component library).
It's a well known fact that there is a lot of churn in the JS framework/library space and I want my library to be resilient against
this while also being flexible as I experiment with different technologies. JS frameworks come and go but CSS is CSS.  

The main disadvantage with this approach is that consumers of Jigsaw have to always load one big CSS file
(`~21kb` at time of writing) which will include styles they don't need. I see this is an acceptable trade-off
right now for the benefits above, but in future I may look at ways I can work on this.
