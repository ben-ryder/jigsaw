import { StorySection } from "../../../development/story-section";
import { useState } from "react";
import { JAlertDialog } from "./alert-dialog";
import { JProse } from "../../../02-components/prose/prose";
import { JSpanButton } from "../../../01-atoms/button/span-button/span-button";
import { JButtonGroup } from "../../button-group/button-group";
import { JButton } from "../../../01-atoms/button/button/button";
import { JDialog } from "../dialog/dialog";


export default {
  title: "Organisms/Dialogs/AlertDialog",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  const [open, setOpen] = useState<boolean>(false)

  function handleCancel() {
    setOpen(false)
  }

  function handleSubmit() {
    setOpen(false)
  }

  return (
    <>
      <StorySection label="Alert Dialog">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          triggerContent={<JSpanButton>Open Dialog</JSpanButton>}
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>Cancel</JButton>
                <JButton variant="destructive" onClick={handleSubmit}>Delete</JButton>
              </JButtonGroup>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}

export function WithCloseButton() {
  const [open, setOpen] = useState<boolean>(false)

  function handleCancel() {
    setOpen(false)
  }

  function handleSubmit() {
    setOpen(false)
  }

  return (
    <>
      <StorySection label="Alert Dialog with close button">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          showCloseButton={true}
          triggerContent={<JSpanButton>Open Dialog</JSpanButton>}
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>Cancel</JButton>
                <JButton variant="destructive" onClick={handleSubmit}>Delete</JButton>
              </JButtonGroup>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}

export function CustomMaxDimensions() {
  const [open, setOpen] = useState<boolean>(false)

  function handleCancel() {
    setOpen(false)
  }

  function handleSubmit() {
    setOpen(false)
  }

  return (
    <>
      <StorySection label="Dialog with custom dimensions">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          triggerContent={<JSpanButton>Open Dialog</JSpanButton>}
          maxWidth="300px"
          maxHeight="300px"
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>Cancel</JButton>
                <JButton variant="destructive" onClick={handleSubmit}>Delete</JButton>
              </JButtonGroup>
            </JProse>
          }
          heading="This is an example heading"
          description="This is an example modal"
        />
      </StorySection>
    </>
  );
}
