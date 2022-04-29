import plugin, {TailwindPlugin} from "tailwindcss/plugin";
import { colourPalette } from "./patterns/01-base/colour-palette";

export const plugins: TailwindPlugin[] = [
  plugin(({theme}) => {
    theme.colors = {
      br: {
        ...colourPalette
      }
    }
  })
];
