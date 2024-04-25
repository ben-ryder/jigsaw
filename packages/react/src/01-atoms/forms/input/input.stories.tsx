import { JInput } from "./input";
import { StorySection } from "../../../development/story-section";

export default {
  title: "Atoms/Forms/Input",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return (
    <JInput
      id="test"
      label="Test Input"
      placeholder="enter some text.."
      type="text"
    />
  );
}

export function WithError() {
  return (
    <JInput
      type="email"
      id="test"
      label="With Error"
      error="You must enter an email address here."
    />
  );
}

export function WithHiddenLabel() {
  return (
    <JInput
      id="test"
      label="This label is hidden"
      placeholder="This input does have a label..."
      type="text"
      hideLabel={true}
    />
  );
}

export function Required() {
  return (
    <JInput
      id="test"
      label="This input is required"
      placeholder="Your text goes here..."
      type="text"
      required={true}
    />
  );
}

export function Disabled() {
  return (
    <>
      <StorySection>
        <JInput
          id="test"
          label="This input is disabled"
          placeholder="Your text goes here..."
          type="text"
          disabled={true}
        />
      </StorySection>

      <StorySection>
        <JInput
          id="test"
          label="This input is disabled with a value"
          placeholder="Your text goes here..."
          type="text"
          disabled={true}
          value="this is some text"
        />
      </StorySection>
    </>
  );
}
