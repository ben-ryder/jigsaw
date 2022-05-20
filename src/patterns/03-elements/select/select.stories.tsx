import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './select';
import { P } from "../../01-base/typography/text";

export default {
  title: 'Elements/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div className="max-w-xs">
    <Select {...args} />
    <P className="text-br-whiteGrey-200 mt-5">A maximum width has been specifically set on a container element</P>
  </div>
)

const options = [
  {name: "--- Select Option ---", value: ""},
  {name: "Option 1", value: "1"},
  {name: "Option 2", value: "2"},
  {name: "Option 3", value: "3"},
  {name: "Option 4", value: "4"},
  {name: "Option 5", value: "5"},
  {name: "Option 6", value: "6"},
]

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Select Option",
  options: options,
  currentOption: options[0]
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  id: "hidden-label",
  hideLabel: true,
  label: "Select Option",
  options: options,
  currentOption: options[0]
};
