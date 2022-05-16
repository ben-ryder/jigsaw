import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {defaultIconProps, IconButton} from './icon-button';
import { XIcon } from "@heroicons/react/outline";

export default {
  title: 'Icon Button',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Icon Button",
  icon: <XIcon className={defaultIconProps.sizingClassName} />,
  className: defaultIconProps.colorClassName
};
