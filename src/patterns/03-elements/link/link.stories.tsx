import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Link, LinkProps} from "./link";

export default {
  title: 'Elements/Links/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  href: "/"
};

function LinkAs(props: LinkProps) {
  return (
    <>
      <Link {...props} />
      <p className="text-br-whiteGrey-100">This 'as' component includes this extra text</p>
    </>
  )
}

const TemplateAs: ComponentStory<typeof Link> = (args) => <LinkAs {...args} />;
export const As = TemplateAs.bind({});
As.args = {
  children: "Default",
  href: "/"
};
