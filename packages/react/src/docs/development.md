---
title: Development
order: 3
---

## Styling
Styling is done using Sass. There are three different types of styling files in the core project:
- `<something>.toolkit.scss` - A Sass file containing **only variables and mixins**. These can be used by other
.scss files.
- `<something>.development.scss` - Sass files specific to the development of the components, primarily used for styling
specific to displaying the components in Ladle. These will not be included in the package.
- `<something>.scss` - The main Sass files for components, will be included in the package.

### Main Styling
Styling for components and other things which should be included in the libraries CSS should be added to the 
`src/main.scss` file which is the file that is compiled to css.

### Development Styling
Styling for development only should be added to the `src/development.scss` file which is then compiled to css.
