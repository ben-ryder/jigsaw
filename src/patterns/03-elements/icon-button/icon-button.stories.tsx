import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {IconButton} from "./icon-button";
import { X as XIcon } from "lucide-react";
import {iconColorClassNames, iconSizes} from "../../01-base/icons/icon-defaults";


export default {
  title: 'Icon Button',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Icon Button",
  icon: <XIcon size={iconSizes.large}/>,
  className: iconColorClassNames.primary
};
