import plugin, {TailwindPlugin} from "tailwindcss/plugin";
import { colourPalette } from "./patterns/01-base/colour-palette/colour-palette";
import { tailwindTypographyCSS } from './intergrations/tailwind-typography';
// @ts-ignore
import forms from '@tailwindcss/forms';
// todo: is their a better was to do this?

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
  }),
  forms
];
