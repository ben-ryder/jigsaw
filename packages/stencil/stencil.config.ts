import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'Jigsaw',
  globalStyle: 'src/styles/global.css',
  plugins: [
    sass({
      injectGlobalPaths: []
    })
  ],
  outputTargets: [
    react({
      componentCorePackage: '@ben-ryder/jigsaw',
      proxiesFile: '../stencil-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: "**/*.ttf",
          dest: "assets/fonts"
        }
      ]
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "**/*.ttf",
          dest: "assets/fonts"
        }
      ]
    },
  ],
  // rollupPlugins: {
  //   after: [
  //     copy({
  //       targets: [
  //         // Fonts
  //         {
  //           src: 'src/**/*.ttf',
  //           dest: 'www/assets/fonts',
  //         },
  //       ],
  //     }),
  //   ]
  // }
};
