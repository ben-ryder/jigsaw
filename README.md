# Jigsaw
A React & Tailwind CSS component library for use in my personal projects.

## Installation
1. Install the [npm package](https://www.npmjs.com/package/@ben-ryder/jigsaw) as follows:
```bash
npm install @ben-ryder/jigsaw
```

2. Configure Jigsaw to work with Tailwind CSS:
```js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@ben-ryder/jigsaw/dist/**/*.js" // <-- add to ensure styles are included at build time
    ],
    theme: {
        extend: {},
    },
    plugins: [
        ...(require("@ben-ryder/jigsaw").plugins) // <-- add the plugins to use custom colours etc
    ],
}
```

## Usage
The package exports all the components, extras etc at the same level:

```tsx
import { Button } from '@ben-ryder/jigsaw';

export function HelloWorld() {
  return (
    <Button>Hello World</Button>
  )
}
```

## Development
This repo uses [Storybook](https://storybook.js.org/) for component development. A public instance is available at [jigsaw.benryder.dev](https://jigsaw.benryder.dev/).

**Adding a new component**  
Before adding a component to this library I must already be using the component in two or three projects. This is to try
and make sure that I've explored the components usage and won't add a component that's too opinionated to a specific project.

## Contributions
This project is currently open source, not open contribution.  
You're welcome to make suggestions, raise bugs and ask questions if you want
but as I'm primarily developing this for use in my own projects I wouldn't really consider this library stable for other people as I may change things unexpectedly (although I do use semantic versioning).

## License
This project is released under the [GNU AGPLv3 license](https://github.com/Ben-Ryder/jigsaw/blob/main/LICENSE.txt).
