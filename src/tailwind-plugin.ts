import plugin, {TailwindPlugin} from "tailwindcss/plugin";
import { colourPalette } from "./patterns/01-base/colour-palette";
import { tailwindTypographyCSS } from './intergrations/tailwind-typography';

export const plugins: TailwindPlugin[] = [
  plugin(({theme}) => {
    theme.colors = {
      br: {
        ...colourPalette
      }
    };
    theme.typography = {
      DEFAULT: {
        css: tailwindTypographyCSS
      }
    }
  })
];
