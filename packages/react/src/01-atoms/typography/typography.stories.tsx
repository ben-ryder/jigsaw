import type { Meta, StoryObj } from '@storybook/react';

import {Typography} from './typography.tsx';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Children: Story = {
  args: {
    children: (
      <>
        <h1>Hello world</h1>
        <p>Using children, quo usque tandem abutere, Catilina, patientia nostra?</p>
      </>
    ),
  },
};

export const StringContent: Story = {
  args: {
    htmlString: '<h1>Hello world</h1><p>Using string content, quo usque tandem abutere, Catilina, patientia nostra?</p>',
  },
};
