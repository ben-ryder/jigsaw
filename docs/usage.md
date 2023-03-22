# Usage

## Core (CSS, Fonts etc)
Install `@ben-ryder/jigsaw` and make sure the `public` directory of the package is included in the 
public directory of your application/website.  

The simplest way to achieve this is via a symlink, for example assuming a `./public` directory (relative to the project root), navigate to that folder then you could do something like this:

```bash
mkdir css
cd css
ln -s ../../node_modules/@ben-ryder/jigsaw/public/css/jigsaw.css jigsaw.css
ln -s ../../node_modules/@ben-ryder/jigsaw/public/css/jigsaw.css.map jigsaw.css.map 
cd ..

mkdir fonts
cd fonts
ln -s ../../node_modules/@ben-ryder/jigsaw/public/fonts/open-sans ./open-sans
cd ..
```

Then just ensure the assets are loaded somewhere:
```html
<link rel="stylesheet" href="/css/jigsaw.css" />
*The CSS file will also load the fonts from the public dir too.
```

For tools like [Vite](https://vitejs.dev/) this is enough as Vite will automatically
bundle your public directory assets as part of its build, but other tools may require you to manually copy the assets.

## React
Just install `@ben-ryder/jigsaw-react` then you will have access to all the components:

```bash
npm i @ben-ryder/jigsaw-react

# You must also install the peerDependencies yourself too
npm i classnames lucide-react
```

```tsx
import {JButton, JProse} from "@ben-ryder/jigsaw-react";

export function Content() {
  return (
    <JProse>
      <h1>This is a test</h1>
      <p>Pellentesque habitant morbi tristique senectus et netus?</p>
      <JButton variant="secondary">Click Me</JButton>
    </JProse>
  );
}
```

You will still need to install and configure `@ben-ryder/jigsaw` to load the styling & assets in your app (see above for details).  
