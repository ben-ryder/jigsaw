import { StorySection } from "../../../development/story-section";
import { useState } from "react";
import { JDialog } from "./dialog";
import { JProse } from "../../../02-components/prose/prose";
import { Default as ExampleForm } from "../../../04-layouts/form/form.stories";
import { JButton } from "../../../01-atoms/button/button/button";


export default {
  title: "Organisms/Dialogs/Dialog",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StorySection label="Dialog">
        <JDialog
          open={open}
          setOpen={setOpen}
          triggerContent={<JButton>Open Dialog</JButton>}
          content={
            <JProse>
              <p>This is a test</p>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}

export function NoOutsideClose() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StorySection label="Dialog with disableOutsideClose option">
        <JDialog
          open={open}
          setOpen={setOpen}
          disableOutsideClose={true}
          triggerContent={<JButton>Open Dialog</JButton>}
          content={
            <JProse>
              <p>This is a test</p>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}

export function CustomDimensions() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StorySection label="Dialog with custom dimensions">
        <JDialog
          open={open}
          setOpen={setOpen}
          disableOutsideClose={true}
          triggerContent={<JButton>Open Dialog</JButton>}
          style={{
            maxWidth: "1000px",
            height: "100%",
            maxHeight: "80vh"
          }}
          content={
            <JProse>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
              <p>This is a test</p>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}

export function WithForm() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StorySection label="Dialog with form content">
        <JDialog
          open={open}
          setOpen={setOpen}
          disableOutsideClose={true}
          triggerContent={<JButton>Open Dialog</JButton>}
          style={{
            maxWidth: "800px"
          }}
          content={
            <ExampleForm />
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}
