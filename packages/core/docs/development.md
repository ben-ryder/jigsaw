---
title: Development
order: 3
---

## Styling
Styling is done using Sass. There are three different types of styling files in the core project:
- `<something>.toolkit.scss` - A Sass file containing **only variables and mixins**. These can be used by other
.scss files and are combined to create the `toolkit.scss` file in the package.
- `<something>.development.scss` - Sass files specific to the development of the components, primarily used for styling
specific to displaying the components in Fractal. These will not be included in the package.
- `<something>.scss` - The main Sass files for components, will be included in the package.

### Main Styling
Styling for components and other things which should be included in the libraries CSS should be added to the 
`patterns/main.scss` file which is the file that is compiled to css.

### Development Styling
Styling for development only (such as how things are output in Fractal) should be added to the
`patterns/development.scss` file which is then compiled to css.

### Sass Toolkit
The `toolkit.scss` file is generated using the command `npm run build:toolkit`  which behind the scenes actually runs ```mkdir -p dist/scss && cat `find . -name '*.toolkit.scss'` > dist/scss/toolkit.scss```.  
This command simply finds all the scss files with the pattern `<something>.toolkit.scss` and concatenates them into a single file. 
