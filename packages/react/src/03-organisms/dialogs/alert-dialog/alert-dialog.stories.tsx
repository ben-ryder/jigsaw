import { StorySection } from "../../../development/story-section";
import { useState } from "react";
import { JAlertDialog } from "./alert-dialog";
import { JProse } from "../../../02-components/prose/prose";
import { JButtonGroup } from "../../button-group/button-group";
import { JButton } from "../../../01-atoms/button/button/button";

export default {
  title: "Organisms/Dialogs/AlertDialog",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  const [open, setOpen] = useState<boolean>(false);

  function handleCancel() {
    setOpen(false);
  }

  function handleSubmit() {
    setOpen(false);
  }

  return (
    <>
      <StorySection label="Alert Dialog">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          triggerContent={<JButton>Open Dialog</JButton>}
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>
                  Cancel
                </JButton>
                <JButton variant="destructive" onClick={handleSubmit}>
                  Delete
                </JButton>
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
  const [open, setOpen] = useState<boolean>(false);

  function handleCancel() {
    setOpen(false);
  }

  function handleSubmit() {
    setOpen(false);
  }

  return (
    <>
      <StorySection label="Alert Dialog with close button">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          showCloseButton={true}
          triggerContent={<JButton>Open Dialog</JButton>}
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>
                  Cancel
                </JButton>
                <JButton variant="destructive" onClick={handleSubmit}>
                  Delete
                </JButton>
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

export function CustomDimensions() {
  const [open, setOpen] = useState<boolean>(false);

  function handleCancel() {
    setOpen(false);
  }

  function handleSubmit() {
    setOpen(false);
  }

  return (
    <>
      <StorySection label="Dialog with custom dimensions">
        <JAlertDialog
          open={open}
          setOpen={setOpen}
          triggerContent={<JButton>Open Dialog</JButton>}
          style={{
            maxWidth: "1000px",
            height: "100%",
            maxHeight: "80vh",
          }}
          content={
            <JProse>
              <p>This is a test</p>

              <JButtonGroup>
                <JButton variant="secondary" onClick={handleCancel}>
                  Cancel
                </JButton>
                <JButton variant="destructive" onClick={handleSubmit}>
                  Delete
                </JButton>
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
