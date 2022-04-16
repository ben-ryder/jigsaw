import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button.styled';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default"
};

export const Primary = Template.bind({});
Primary.args = {
  styling: "primary",
  children: "Primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  styling: 'secondary',
  children: "Secondary"
};

export const Destructive = Template.bind({});
Destructive.args = {
  styling: 'destructive',
  children: "Success"
};

export const Constructive = Template.bind({});
Constructive.args = {
  styling: 'constructive',
  children: "Danger"
};
