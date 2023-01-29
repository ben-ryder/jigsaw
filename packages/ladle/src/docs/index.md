---
label: About
title: Welcome to Jigsaw!
order: 1
---

Jigsaw is a design system and component library for use in my personal projects.  
It aims to provide a universal design system and component library that I can use to speed up developing my websites and applications.  

You can explore the design system and all the component styling using this website.  
To learn more and have a peek at the code, check out the [GitHub Repository](https://github.com/Ben-Ryder/jigsaw).


## Project Structure
The main idea behind the structure of Jigsaw is that I want to build a design system and component library
which is not tied to any one framework or technology because I like to try out different frameworks
and tools and I don't want to have to re-implement Jigsaw from scratch every time.

To build a cross-framework design system and component library I need to use framework-agnostic tools, so the core package `@ben-ryder/jigsaw`
simply exports the built `.css` file, the original `.scss` files and other assets like fonts.
