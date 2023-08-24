import "./multiselect";

import { JMultiSelectControl } from "./multiselect";
import { useState } from "react";
import { JOptionData } from "../../form-elements/select/select";
import { JMultiSelectOptionData } from "../../form-elements/multiselect/multiselect";

export default {
  title: "Atoms/Form Controls/MultiSelect",
  parameters: {
    status: {
      type: "experimental",
    },
  },
};

const options: JMultiSelectOptionData[] = [
  {
    text: "Option One",
    value: "one",
    variant: "green",
  },
  {
    text: "Option Two",
    value: "two",
  },
  {
    text: "Option Three",
    value: "three",
    variant: "purple",
  },
  {
    text: "Option Four",
    value: "Four",
    variant: "red",
  },
  {
    text: "Option Five",
    value: "Five",
  },
  {
    text: "Option Six",
    value: "six",
    variant: "yellow",
  },
];

export function Default() {
  const [selectedOptions, setSelectedOptions] = useState<JOptionData[]>([
    options[0],
    options[4],
  ]);

  return (
    <JMultiSelectControl
      label="Example MultiSelect"
      id="test"
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      searchText="Search options custom..."
      noOptionsText="No options custom"
    />
  );
}

export function WithError() {
  const [selectedOptions, setSelectedOptions] = useState<JOptionData[]>([
    options[0],
    options[4],
  ]);

  return (
    <JMultiSelectControl
      label="Example MultiSelect"
      id="test"
      error="There's something wrong with this!"
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
}

export function WithHiddenLabel() {
  const [selectedOptions, setSelectedOptions] = useState<JOptionData[]>([
    options[0],
    options[4],
  ]);

  return (
    <JMultiSelectControl
      label="Example MultiSelect"
      id="test"
      hideLabel={true}
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
}
