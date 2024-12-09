import { StorySection } from "../../development/story-section/story-section";
import { useState } from "react";
import { JDialog } from "./dialog";
import { JProse } from "../../02-components/prose/prose";
import { Default as ExampleForm } from "../../04-layouts/form/form.stories";
import { JButton } from "../../01-atoms/button/button/button";
import {JButtonGroup} from "../button-group/button-group";

export default {
  title: "Organisms/Dialog",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

export function Default() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StorySection label="Dialog">
        <JButton onClick={() => {setOpen(true)}}>Open Dialog</JButton>
        <JDialog
          isOpen={open}
          setIsOpen={setOpen}
          title="This is an example title"
          description="This is an example modal"
          content={
            <JProse>
              <p>This is a test</p>
            </JProse>
          }
        />
      </StorySection>
    </>
  );
}

export function NoOutsideClose() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StorySection label="Dialog with disableOutsideClose option">
        <JButton onClick={() => {setOpen(true)}}>Open Dialog</JButton>
        <JDialog
          isOpen={open}
          setIsOpen={setOpen}
          disableOutsideClose={true}
          title="This is an example title"
          description="This is an example modal"
          content={
            <JProse>
              <p>This is a test</p>
            </JProse>
          }
        />
      </StorySection>
    </>
  );
}

export function CustomDimensions() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StorySection label="Dialog with custom dimensions">
        <JButton onClick={() => {setOpen(true)}}>Open Dialog</JButton>
        <JDialog
          isOpen={open}
          setIsOpen={setOpen}
          disableOutsideClose={true}
          style={{
            maxWidth: "1000px",
            height: "100%",
            maxHeight: "50vh",
          }}
          title="This is an example heading"
          description="This is an example title"
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
        />
      </StorySection>
    </>
  );
}

export function AlertRole() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StorySection label="Dialog with alertdialog role">
        <JButton onClick={() => {setOpen(true)}}>Open Dialog</JButton>
        <JDialog
          role='alertdialog'
          isOpen={open}
          setIsOpen={setOpen}
          disableOutsideClose={true}
          title="Are you sure?"
          description="This is an example alert dialog"
          content={
            <div>
              <JProse>
                <p>This action is irreversible and will <b>permanently delete</b> your content on all devices. Do you wish to continue?</p>
              </JProse>
              <JButtonGroup>
                <JButton variant='secondary' onClick={() => {setOpen(false)}}>Cancel</JButton>
                <JButton variant='destructive' onClick={() => {setOpen(false)}}>Delete</JButton>
              </JButtonGroup>
            </div>
          }
        />
      </StorySection>
    </>
  );
}


export function WithForm() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StorySection label="Dialog with form content">
        <JButton onClick={() => {setOpen(true)}}>Open Dialog</JButton>
        <JDialog
          isOpen={open}
          setIsOpen={setOpen}
          disableOutsideClose={true}
          style={{
            maxWidth: "800px",
          }}
          title="This is an example title"
          description="This is an example modal"
          content={<ExampleForm />}
        />
      </StorySection>
    </>
  );
}
