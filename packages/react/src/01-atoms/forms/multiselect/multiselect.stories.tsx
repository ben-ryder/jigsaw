import "./multiselect";

import { JMultiSelect, JMultiSelectOptionData } from "./multiselect";
import { useState } from "react";
import { StorySection } from "../../../development/story-section";

export default {
  title: "Atoms/Forms/MultiSelect",
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
    value: "four",
    variant: "red",
  },
  {
    text: "Option Five",
    value: "five",
  },
  {
    text: "Option Six",
    value: "six",
    variant: "yellow",
  },
];

export function Default() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <JMultiSelect
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

// The multiselect should match options based on the value not if the object
// reference is the exact same.
export function MatchingValueOptions() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([
    {
      text: "Option One",
      value: "one",
      variant: "green",
    },
    {
      text: "Option Two",
      value: "two",
    },
  ]);

  return (
    <JMultiSelect
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

export function Minimal() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <JMultiSelect
      label="Example MultiSelect"
      id="test"
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      variant="minimal"
      hideLabel={true}
    />
  );
}

export function WithError() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <JMultiSelect
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
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <JMultiSelect
      label="Example MultiSelect"
      id="test"
      hideLabel={true}
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
}

export function Required() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <JMultiSelect
      label="Required MultiSelect"
      id="test"
      required={true}
      options={options}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
}

export function Disabled() {
  const [selectedOptions, setSelectedOptions] = useState<
    JMultiSelectOptionData[]
  >([options[0], options[4]]);

  return (
    <>
      <StorySection>
        <JMultiSelect
          label="Disabled MultiSelect"
          id="test"
          disabled={true}
          options={options}
          selectedOptions={[]}
          setSelectedOptions={setSelectedOptions}
        />
      </StorySection>
      <StorySection>
        <JMultiSelect
          label="Disabled MultiSelect with values"
          id="test"
          disabled={true}
          options={options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </StorySection>
    </>
  );
}
