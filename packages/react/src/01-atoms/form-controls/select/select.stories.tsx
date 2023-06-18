import {JSelectControl} from "./select";

export default {
  title: "Atoms/Form Controls/Select",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

export function Default() {
  return (
    <JSelectControl
      id="test"
      label="Test Select"
      options={[
        {value: "", text: "-- Select Option --"},
        {value: "1", text: "Option One"},
        {value: "2", text: "Option Two"},
        {value: "3", text: "Option Three"},
        {value: "4", text: "Option Four"},
        {value: "5", text: "Option Five"},
      ]}
    />
  )
}

export function WithError() {
  return (
    <JSelectControl
      id="test"
      label="With Error"
      options={[
        {value: "", text: "-- Select Option --"},
        {value: "1", text: "Option One"},
        {value: "2", text: "Option Two"},
        {value: "3", text: "Option Three"},
        {value: "4", text: "Option Four"},
        {value: "5", text: "Option Five"},
      ]}
      error="There is an error here!"
    />
  )
}

export function WithHiddenLabel() {
  return (
    <JSelectControl
      id="test"
      label="Hidden Label"
      hideLabel={true}
      options={[
        {value: "", text: "-- Select Option --"},
        {value: "1", text: "Option One"},
        {value: "2", text: "Option Two"},
        {value: "3", text: "Option Three"},
        {value: "4", text: "Option Four"},
        {value: "5", text: "Option Five"},
      ]}
    />
  )
}
