# Jigsaw
A React component library with Tailwind CSS for use in my personal projects.

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
        "./node_modules/@ben-ryder/jigsaw/styled/**/*.js" // <-- add to ensure styles are included at build time
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@ben-ryder/jigsaw/plugin") // <-- add the plugin to use custom colours etc
    ],
}
```

## Usage
The package exports two component library versions:

### Base
`@ben-ryder/jigsaw/base` exports completely un-styled components that are purely functional.

```tsx
import { Button } from '@ben-ryder/jigsaw/base';

export function HelloWorld() {
  return (
    <Button>Hello World</Button>
  )
}
```

### Styled
`@ben-ryder/jigsaw/styled` exports styled components that are ready to use.

```tsx
import { Button } from '@ben-ryder/jigsaw/styled';

export function HelloWorld() {
  return (
    <Button>Hello World</Button>
  )
}
```

## Development
This repo uses [Storybook](https://storybook.js.org/) for component development.

**Adding a new component**  
Before adding a component to this library I must already be using the component in two or three projects. This is to try
and make sure that I've explored the components usage and won't add a component that's too opinionated to a specific project.

## Contributions
This project is currently open source, not open contribution.  
You're welcome to make suggestions, raise bugs and ask questions if you want
but as I'm primarily developing this for myself I wouldn't really consider this project stable for general use.

## License
This project is released under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.
