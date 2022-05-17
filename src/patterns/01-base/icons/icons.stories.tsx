import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {iconSizes, iconColorClassNames} from "./icon-defaults";
import { X as XIcon } from 'lucide-react';
import {H1} from "../typography/headings";
import {P} from "../typography/text";

export function IconStyles() {
  return (
    <div className="text-br-whiteGrey-200">
      <div>
        <H1 className="text-br-whiteGrey-100 mb-3">Icon Styles</H1>
        <P className="text-br-whiteGrey-200">These are all the global icon sizes and colours available.</P>
        <P className="text-br-whiteGrey-200">Default colour styling is designed to be used in interactive contexts such as the IconButton component.</P>
      </div>
      <div className="mt-3">
        {Object.keys(iconSizes).map(iconSizeName => (
          <div key={iconSizeName} className="mb-4">
            <h2 className="text-2xl font-bold text-br-whiteGrey-100">{iconSizeName}</h2>
            <div className="mt-1 flex flex-wrap">
              {Object.keys(iconColorClassNames).map(iconColorClassName =>
                // @ts-ignore
                <span key={iconColorClassName} className={iconColorClassNames[iconColorClassName]}>
                  {/** @ts-ignore **/}
                  <XIcon size={iconSizes[iconSizeName]} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default {
  title: 'Icon Styles',
  component: IconStyles,
  parameters: { options: { showPanel: false } },
} as ComponentMeta<typeof IconStyles>;
