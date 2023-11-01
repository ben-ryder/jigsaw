import { JTextArea } from "./textarea";

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
