import { JTextArea } from "./textarea";
import { StorySection } from "../../../development/story-section";

export default {
  title: "Atoms/Forms/TextArea",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return (
    <JTextArea
      id="test"
      label="Test Text Area"
      placeholder="enter some text here..."
      rows={5}
    />
  );
}

export function WithError() {
  return (
    <JTextArea
      id="test"
      label="With Error"
      placeholder="enter some text here..."
      error="There is a problem here!"
      rows={5}
    />
  );
}

export function WithHiddenLabel() {
  return (
    <JTextArea
      id="test"
      label="With Hidden Label"
      placeholder="There is actually a label..."
      hideLabel={true}
      rows={5}
    />
  );
}

export function Required() {
  return (
    <JTextArea
      id="test"
      label="This textarea is required"
      placeholder="Your text goes here..."
      required={true}
      rows={5}
    />
  );
}

export function Disabled() {
  return (
    <>
      <StorySection>
        <JTextArea
          id="test"
          label="This textarea is disabled"
          placeholder="Your text goes here..."
          disabled={true}
          rows={5}
        />
      </StorySection>
      <StorySection>
        <JTextArea
          id="test"
          label="This textarea is disabled with a value"
          placeholder="Your text goes here..."
          disabled={true}
          rows={5}
          value="This is some text"
        />
      </StorySection>
    </>
  );
}
