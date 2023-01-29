import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiSelect } from './multi-select';
import { P } from "../../01-base/typography/text";
import {useArgs} from "@storybook/client-api";
import {Option} from "../../02-partials/select/option-helpers";

export default {
  title: 'Elements/Form Elements/MultiSelect',
  component: MultiSelect
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => {
  const [{ currentOptions, onOptionsChange }, updateArgs] = useArgs();

  return (
    <div className="max-w-md">
      <MultiSelect
        {...args}
        currentOptions={currentOptions}
        onOptionsChange={(options) => {
          updateArgs({currentOptions: options});
          onOptionsChange(options);
        }}
      />
      <P className="text-br-whiteGrey-200 mt-5">A maximum width has been specifically set on a container element</P>
    </div>
  )
};

const options: Option[] = [
  {name: "Option 1", value: "1"},
  {name: "Option 2", value: "2", backgroundColour: "#f00"},
  {name: "Option 3", value: "3"},
  {name: "Option 4", value: "4", backgroundColour: "#0f0", textColour: "#000"},
  {name: "Option 5", value: "5"},
  {name: "Option 6", value: "6"},
]

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Select Options",
  placeholder: "search option...",
  options: options,
  currentOptions: [options[0].value, options[3].value]
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  id: "hidden-label",
  hideLabel: true,
  label: "Select Options",
  placeholder: "search option...",
  options: options,
  currentOptions: [options[0].value, options[3].value]
};
