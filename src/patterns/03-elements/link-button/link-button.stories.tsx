import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {LinkButton} from "./link-button";

export default {
  title: 'Elements/Links/LinkButton',
  component: LinkButton
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  href: "/"
};

export const Solid = Template.bind({});
Solid.args = {
  children: "Solid",
  variant: "solid",
  href: "/"
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  variant: "outline",
  href: "/"
};
