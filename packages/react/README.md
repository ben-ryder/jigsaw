# Jigsaw
A design system and component library for use in my personal projects.

[Explore Design System & Components](https://jigsaw.benryder.dev/)

## Packages
- `@ben-ryder/jigsaw-react` (`packages/react`) - The main React component library where everything is developed.
- `@ben-ryder/jigsaw` (`packages/core`) - A stripped back distribution of Jigsaw containing only styles and assets.

## Contributions
This project is currently open source, not open contribution.  
You're welcome to make suggestions, raise bugs and ask questions if you want
but as I'm primarily developing this for use in my own projects I wouldn't really consider this library stable for other people as I may change things unexpectedly (although I do use semantic versioning).

## License
This project is released under the [GNU AGPLv3 license](https://github.com/Ben-Ryder/jigsaw/blob/main/LICENSE.txt).

## Project Structure
Main points for styling:
- CSS variables are used to store all design system tokens such as colours, spacing values etc
- SASS is used to keep the styling closer to pure CSS while allowing for quality of life improvements like nested styles and mixins.
  - The aim is to make the styling somewhat platform-agnostic and easier to migrate in the future if required, which might be harder with a CSS-in-JS solution or similar.
  - I also have mixed feelings about Tailwind. While it's great for working quickly, I personally dislike how much context you loose the minute you're doing things like inspecting the page source, and you're forced to have extra tooling like preprocessors and IDE plugins. 
- Styling us split up into different files:
  - Styles should be in `<name>.scss` files located next to the corresponding `<name>.tsx` and `<name>.stories.tsx` files
    - These should be imported into `component.scss` and added to `jigsaw.scss`
  - CSS variables should be in `<name>.vars.scss` files and should be added to the `base.scss` file.
  - SASS mixins and variables should be in `<name>.toolkit.scss` files and can be freely used anywhere, as there should be no actual CSS in these files.
  - Styles used only in the development environment should be in `<name>.development.scss` and should then be added to `development.scss`
