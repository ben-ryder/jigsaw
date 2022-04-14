import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
  children: "button text"
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: "button text"
};
