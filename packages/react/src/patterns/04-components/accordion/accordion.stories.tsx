import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "This is item 1",
      content: <p>This is item 1's content</p>
    },
    {
      title: "This is item 2",
      content: <p>This is item 2's content</p>
    },
    {
      title: "This is item 3",
      content: <p>This is item 3's content</p>
    },
    {
      title: "This is item 4",
      content: <p>This is item 4's content</p>
    },
    {
      title: "This is item 5",
      content: <p>This is item 5's content</p>
    }
  ]
};
