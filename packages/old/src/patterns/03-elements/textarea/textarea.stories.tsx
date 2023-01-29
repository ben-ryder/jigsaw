import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './textarea';

export default {
  title: 'Elements/Form Elements/TextArea',
  component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "This is a text area",
  rows: 5
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  id: "default",
  hideLabel: true,
  label: "This label can't be seen",
  rows: 5
};
