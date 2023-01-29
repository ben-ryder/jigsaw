import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {LinkButton, LinkButtonProps} from "./link-button";

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

function LinkButtonAs(props: LinkButtonProps) {
  return (
    <>
      <LinkButton {...props} />
      <p className="text-br-whiteGrey-100">This 'as' component includes this extra text</p>
    </>
  )
}

const TemplateAs: ComponentStory<typeof LinkButton> = (args) => <LinkButtonAs {...args} />;
export const As = TemplateAs.bind({});
As.args = {
  children: "Default",
  href: "/"
};
