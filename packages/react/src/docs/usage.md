---
title: Usage
order: 2
---

The core library itself does not export components that are ready for general usage in frameworks such as React,
instead it simply exposes CSS and Sass files which along with specific markup, can be combined to "use"
the components.  
There are some library wrappers available though, which you can learn about below.

## @ben-ryder/jigsaw
This is the core Jigsaw package that provides a CSS file and SCSS toolkit.

### CSS File
The quickest way to get started with Jigsaw is simply by loading the `jigsaw.css` file into your application/website
which will then give you access to all the component styling.

### Sass Files 
It's possible that the consuming application will need to access the Sass design tokens for
custom components and styling. This can be done by including the relevant `.scss` file from the package.

## @ben-ryder/jigsaw-react
- This library implements React-specific versions of the Jigsaw components for easy use in React applications.
