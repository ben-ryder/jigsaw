import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { colourPalette } from './colour-palette';

export function ColourPalette() {
  return (
    <div className="text-br-whiteGrey-200">
      <div>
        <h1 className="text-3xl font-bold text-br-whiteGrey-100">Colour Palette</h1>
        <p>
          These are all the colours used in this component library.
          Most of them are directly copied from Tailwind <a className="underline hover:text-br-teal-600" href="https://tailwindcss.com/docs/customizing-colors">default colours</a> but "atom" and some of the naming is custom.
        </p>
      </div>
      <div className="mt-3">
        {Object.keys(colourPalette).map(colourName => (
          <div key={colourName} className="mb-4">
            <h2 className="text-2xl font-bold text-br-whiteGrey-100">{colourName}</h2>
            <div className="mt-1 flex flex-wrap">
              {/** @ts-ignore **/}
              {Object.keys(colourPalette[colourName]).map(colourShade => (
                <div key={colourShade} className="border mr-2 border-br-blueGrey-600">
                  {/** @ts-ignore **/}
                  <span className="block w-full min-w-[150px] h-[150px]" style={{backgroundColor: colourPalette[colourName][colourShade]}}></span>
                  <div className="p-2 border-t border-br-blueGrey-600">
                    <p>{colourShade}</p>
                    {/** @ts-ignore **/}
                    <p className="font-bold text-br-whiteGrey-100">{colourPalette[colourName][colourShade]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  title: 'Colour Palette',
  component: ColourPalette,
  parameters: { options: { showPanel: false } },
} as ComponentMeta<typeof ColourPalette>;
