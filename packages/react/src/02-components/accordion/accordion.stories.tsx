import { JAccordion, JAccordionItem } from "./accordion";
import { JProse } from "../prose/prose";
import { JCallout } from "../callout/callout";

export default {
  title: "Components/Accordion",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return (
    <JAccordion>
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
    </JAccordion>
  );
}
