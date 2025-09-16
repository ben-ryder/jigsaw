import { JCallout } from "./callout";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta = {
  title: "Components/Callout",
  component: JCallout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof JCallout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: (
      <>
        <p>
          <b>Top Tip:</b> Callouts are not just limited to basic markup, but can
          also contain some <b>bold text</b> and even some{" "}
          <i>italics like this</i>. Here's even more special things like{" "}
          <code>some code</code> and <a href="#">even a link</a>. This works
          because the callout content section extends the styling of the{" "}
          <code>Prose</code> component.
        </p>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: (
      <>
        <p>This variant can highlight a warning or draw the users attention to something they should know about.</p>
      </>
    ),
  },
};

export const Critical: Story = {
  args: {
    variant: "critical",
    children: (
      <>
        <p>This variant can highlight a danger or error and is more severe than a warning.</p>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <p>This variant can highlight a success or confirmation.</p>
      </>
    ),
  },
};

