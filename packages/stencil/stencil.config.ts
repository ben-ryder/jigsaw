import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'Jigsaw',
  globalStyle: 'src/styles/variables.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.scss']
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
    },
  ],
};
