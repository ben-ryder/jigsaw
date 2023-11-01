import { JInput } from "./input";

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
