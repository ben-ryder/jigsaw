import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ArrowLink} from "./arrow-link";

export default {
  title: 'Elements/Links/ArrowLink',
  component: ArrowLink
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = (args) => <ArrowLink {...args} />;

export const Right = Template.bind({});
Right.args = {
  direction: "right",
  children: "view all content",
  href: "/"
};

export const Left = Template.bind({});
Left.args = {
  direction: "left",
  children: "back to list",
  href: "/"
};

