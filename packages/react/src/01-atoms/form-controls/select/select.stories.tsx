import { JSelectControl } from "./select";
import { useState } from "react";

export default {
  title: "Atoms/Form Controls/Select",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

const testOptions = [
  { value: "", text: "-- Select Option --" },
  { value: "1", text: "Option One" },
  { value: "2", text: "Option Two" },
  { value: "3", text: "Option Three" },
  { value: "4", text: "Option Four" },
  { value: "5", text: "Option Five" },
];

export function Default() {
  return <JSelectControl id="test" label="Test Select" options={testOptions} />;
}

export function WithError() {
  return (
    <JSelectControl
      id="test"
      label="With Error"
      options={testOptions}
      error="There is an error here!"
    />
  );
}

export function WithHiddenLabel() {
  return (
    <JSelectControl
      id="test"
      label="Hidden Label"
      hideLabel={true}
      options={testOptions}
    />
  );
}

export function Controlled() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <>
      <JSelectControl
        id="test"
        label="Hidden Label"
        hideLabel={true}
        options={testOptions}
        value={selectedOption}
        onChange={setSelectedOption}
      />
      <p>
        This elements value is being controlled via React state rather than via
        the browser
      </p>
    </>
  );
}
