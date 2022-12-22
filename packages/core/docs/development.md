---
title: Development
order: 3
---

## Styling
Styling is done using Sass. There are a number of different types of styling files in the core project:
- `<something>.toolkit.scss` - A Sass file containing **only variables and mixins**. These can be used by other
.scss files and are combined to create the `toolkit.scss` file in the package.
- `<something>.development.scss` - Sass files specific to the development of the components, primarily used for styling
specific to displaying the components in Fractal. These will not be included in the package.
- `<something>.scss` - The main Sass files for components, will be included in the package.
