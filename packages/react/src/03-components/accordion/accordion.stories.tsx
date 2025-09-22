import type { Meta, StoryObj } from '@storybook/react-vite';
import {JAccordion, JAccordionItem} from "./accordion";
import {JProse} from "../../02-atoms/prose/prose";
import {JCallout} from "../callout/callout";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Accordion',
  component: JAccordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof JAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <JAccordionItem title="This is item one">
          <JProse>
            <p>
              This is a <code>j-prose</code> component within the content of an
              accordion item.
            </p>

            <JCallout>
              <p>
                <b>Look at this!</b> Accordion content can contain anything, such
                as this callout component. Here's some <b>bold text</b> and even
                some <i>italics like this</i>. Here's even more special things
                like <code>some code</code> and <a href="#">even a link</a>. This
                works because the callout content section extends the styling of
                the <code>Prose</code> component.
              </p>
            </JCallout>

            <p>Here's some more text at the end</p>
          </JProse>
        </JAccordionItem>
        <JAccordionItem title="This is item two">
          <p>This is item two with just a plain p tag</p>
        </JAccordionItem>
        <JAccordionItem title="This is item three">
          <JProse>This is item three...</JProse>
        </JAccordionItem>
        <JAccordionItem title="This is item four">
          <JProse>This is item four...</JProse>
        </JAccordionItem>
      </>
    ),
  },
};
