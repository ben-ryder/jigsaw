import {JTextAreaControl} from "./textarea";

export default {
  title: "Atoms/Form Controls/TextArea",
};

export function Default() {
  return (
    <JTextAreaControl
      id="test"
      label="Test Text Area"
      placeholder="enter some text here..."
    />
  )
}

export function WithError() {
  return (
    <JTextAreaControl
      id="test"
      label="With Error"
      placeholder="enter some text here..."
      error="There is a problem here!"
    />
  )
}

export function WithHiddenLabel() {
  return (
    <JTextAreaControl
      id="test"
      label="With Hidden Label"
      placeholder="There is actually a label..."
      hideLabel={true}
    />
  )
}