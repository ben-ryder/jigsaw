import { JSelect } from "./select";
import { useState } from "react";
import { StorySection } from "../../../development/story-section";

export default {
  title: "Atoms/Forms/Select",
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
  return <JSelect id="test" label="Test Select" options={testOptions} />;
}

export function WithError() {
  return (
    <JSelect
      id="test"
      label="With Error"
      options={testOptions}
      error="There is an error here!"
    />
  );
}

export function WithHiddenLabel() {
  return (
    <JSelect
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
      <JSelect
        id="test"
        label="Hidden Label"
        hideLabel={true}
        options={testOptions}
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      />
      <p>
        This elements value is being controlled via React state rather than via
        the browser
      </p>
    </>
  );
}

export function Required() {
  return (
    <JSelect
      id="test"
      label="Required Select"
      required={true}
      options={testOptions}
    />
  );
}

export function Disabled() {
  return (
    <>
      <StorySection>
        <JSelect
          id="test"
          label="Disabled Select"
          disabled={true}
          options={testOptions}
        />
      </StorySection>
      <StorySection>
        <JSelect
          id="test"
          label="Disabled select with value"
          disabled={true}
          options={testOptions}
          value="1"
        />
      </StorySection>
    </>
  );
}
