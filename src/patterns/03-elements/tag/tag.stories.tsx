import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './tag';
import { X as XIcon } from 'lucide-react';
import { IconButton } from "../icon-button/icon-button";
import {iconSizes} from "../../01-base/icons/icon-defaults";

export default {
  title: 'Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "default tag"
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  text: "custom color",
  bgColor: "#ff7700",
  fgColor: "#000"
};

export const RightContent = Template.bind({});
RightContent.args = {
  text: "right content",
  rightContent: <IconButton
    className="hover:text-br-whiteGrey-200"
    label="Remove Tag"
    icon={<XIcon size={iconSizes.small} strokeWidth={3} />}
    onClick={() => {}}
  />
};