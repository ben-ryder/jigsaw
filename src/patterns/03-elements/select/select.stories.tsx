import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from "@storybook/client-api";
import {userEvent, within} from "@storybook/testing-library";
import { expect as expectStorybook } from '@storybook/jest';

import { Select } from './select';
import { P } from "../../01-base/typography/text";


export default {
  title: 'Elements/Form Elements/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [{ currentOption, onOptionChange }, updateArgs] = useArgs();

  return (
    <div className="max-w-xs">
      <Select
        {...args}
        currentOption={currentOption}
        onOptionChange={(option) => {
          updateArgs({currentOption: option});
          onOptionChange(option);
        }}
      />
      <P className="text-br-whiteGrey-200 mt-5">A maximum width has been specifically set on a container element</P>
    </div>
  )
};

const options = [
  {name: "--- Select Option ---", value: ""},
  {name: "Option 1", value: "1"},
  {name: "Option 2", value: "2"},
  {name: "Option 3", value: "3"},
  {name: "Option 4", value: "4"},
  {name: "Option 5", value: "5"},
  {name: "Option 6", value: "6"},
]

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Select Option",
  options: options,
  currentOption: options[0]
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByLabelText("Select Option");

  await userEvent.click(select);
  const option2 = canvas.getByRole("option", {name: "Option 2"});

  await userEvent.click(option2);

  await expectStorybook(select.textContent).toEqual("Option 2")
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  id: "hidden-label",
  hideLabel: true,
  label: "Select Option",
  options: options,
  currentOption: options[0]
};
