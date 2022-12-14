import plugin, {TailwindPlugin} from "tailwindcss/plugin";
import { colourPalette } from "./patterns/01-base/colour-palette/colour-palette";
import { tailwindTypographyCSS } from './intergrations/tailwind-typography';
import forms from "@tailwindcss/forms";


export const plugins: TailwindPlugin[] = [
  plugin(() => {},{
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        br: {
          ...colourPalette
        }
      },
      typography: {
        DEFAULT: {
          css: tailwindTypographyCSS
        }
      }
    }
  }),
  forms
];
