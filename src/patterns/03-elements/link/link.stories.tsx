import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Link} from "./link";

export default {
  title: 'Elements/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  href: "/"
};
