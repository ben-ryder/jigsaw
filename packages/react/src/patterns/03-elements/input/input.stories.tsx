import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'Elements/Form Elements/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  id: "default",
  label: "This is an input"
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  type: "text",
  id: "default",
  hideLabel: true,
  label: "This label can't be seen"
};
