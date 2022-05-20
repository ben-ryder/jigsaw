import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './textarea';

export default {
  title: 'Elements/Text Area',
  component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "This is a text area"
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  id: "default",
  hideLabel: true,
  label: "This label can't be seen"
};
