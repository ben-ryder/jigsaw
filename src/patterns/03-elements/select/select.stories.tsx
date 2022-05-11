import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './select';

export default {
  title: 'Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
