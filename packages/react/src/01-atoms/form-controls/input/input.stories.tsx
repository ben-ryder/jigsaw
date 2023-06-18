import {JInputControl} from "./input";

export default {
  title: "Atoms/Form Controls/Input",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

export function Default() {
    return (
      <JInputControl
        id="test"
        label="Test Input"
        placeholder="enter some text.."
        type="text"
      />
    )
}

export function WithError() {
    return (
      <JInputControl
        type="email"
        id="test"
        label="With Error"
        error="You must enter an email address here."
      />
    )
}

export function WithHiddenLabel() {
  return (
    <JInputControl
      id="test"
      label="This label is hidden"
      placeholder="This input does have a label..."
      type="text"
      hideLabel={true}
    />
  )
}
