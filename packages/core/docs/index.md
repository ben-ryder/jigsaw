---
label: About
title: Welcome to Jigsaw!
order: 1
---

Jigsaw is a design system and component library for use in my personal projects.  
It aims to provide a universal design system and component library that I can use to speed up developing my websites and applications.  

You can explore the design system and all the component styling using this website.  
To learn more and have a peek at the code, check out the [GitHub Repository](https://github.com/Ben-Ryder/jigsaw).

## Component Statuses
<div class="j-prose">
    <table>
        <thead><tr><th>Badge</th><th>Meaning</th></tr></thead>
        <tbody>
        <tr><td><div class="j-badge j-badge--red">in development</div></td><td>The component is in active development and is not complete.</td></tr>
        <tr><td><div class="j-badge j-badge--orange">unstable</div></td><td>The component is done for now but is considered unstable and subject to change. Use with caution.</td></tr>
        <tr><td><div class="j-badge j-badge--green">stable</div></td><td>The component is in a stable form and is fine for use.</td></tr>
        </tbody>
    </table>
</div>

## Project Structure
The main idea behind the structure of Jigsaw is that I want to build a design system and component library
which is not tied to any one framework or technology because I like to try out different frameworks
and tools and I don't want to have to re-implement Jigsaw from scratch every time.

To build a cross-framework design system and component library I need to use framework-agnostic tools, so I use pure HTML and CSS (well Nunjucks and Sass for development, but close enough).  
The core package `@ben-ryder/jigsaw` is developed using [Fractal](https://fractal.build/) and
the package published to NPM contains:
- `dist/jigsaw.css` - A single CSS file containing all the library styles.
- `.scss files` - The un-compiled Sass files used to build the theme.

### Why not Web Components?
If my goal is to create a cross-framework component library why not use web components? It
sounds like the perfect use case...

The short answer is effort, building web components is way more complex than just building static
HTML components with CSS.

The long answer is that I started trying to build web components via [Stencil](https://stenciljs.com/),
but I just wasn't happy with it for a few reasons:
- With web components I can re-use my components across frameworks yes,
but using a library to build them means that I am still effectively locked into that library. Using
pure HTML and CSS ensures I have the greatest chance of cross-compatibility and tool longevity.
- The deal-breaker for Stencil was that they still have [no official Storybook integration](https://github.com/ionic-team/stencil/issues/2328), and their
tooling just didn't feel as seamless as I'd want it to be.
- There were also some potential issues with web components I wasn't sure about, such as the fact I'd need
additional tooling for SSR to ensure websites still worked without JS enabled.

These are all problems I could probably have worked around, but it wasn't really where I wanted to spend my effort.
