import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {JArrow} from "./arrow";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Arrow',
  component: JArrow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    href: '#',
  },
} satisfies Meta<typeof JArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example arrow',
  },
};

export const LeftArrow: Story = {
  args: {
    direction: 'left',
    children: 'Example arrow',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    children: 'Example arrow',
  },
};

export const AsProp: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#">Example Arrow</a>
    ),
  },
};
