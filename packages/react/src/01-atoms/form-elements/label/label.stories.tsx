import {JLabel} from "./label";

export default {
  title: "Atoms/Form Elements/Label",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

export function Label() {
  return (
    <JLabel>This is a label</JLabel>
  )
}
