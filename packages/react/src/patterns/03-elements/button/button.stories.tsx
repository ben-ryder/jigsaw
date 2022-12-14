import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Elements/Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default"
};

export const Solid = Template.bind({});
Solid.args = {
  children: "Solid",
  variant: "solid"
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  variant: "outline"
};
