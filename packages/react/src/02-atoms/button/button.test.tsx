import { render } from 'vitest-browser-react'
import { expect, test } from 'vitest'

import { JButton } from "./button.js";

test('no props should display primary button', async () => {
  const screen = render(<JButton>Example button</JButton>)
  await expect.element(screen.getByText('Example button')).toHaveStyle(`background-color: #0a766d;`)
})