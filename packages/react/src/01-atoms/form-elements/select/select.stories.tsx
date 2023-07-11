import "./select.scss";

import {JSelect} from "./select";
import {useState} from "react";

export default {
  title: "Atoms/Form Elements/Select",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

const testOptions = [
  {
    text: "-- Select Option --",
    value: ""
  },
  {
    text: "Option One",
    value: "1"
  },
  {
    text: "Option Two",
    value: "2"
  },
  {
    text: "Option Three",
    value: "3"
  }
];

export function Default() {
    return (
      <JSelect
        id="default"
        options={testOptions}
      />
    )
}

export function WithError() {
    return (
      <JSelect
        id="with-error"
        error={true}
        options={testOptions}
      />
    )
}

export function Controlled() {
  const [selectedOption, setSelectedOption] = useState<string>(testOptions[1].value);

  return (
    <>
      <JSelect
        id="with-error"
        error={true}
        options={testOptions}
        value={selectedOption}
        onChange={setSelectedOption}
      />
      <p>This elements value is being controlled via React state rather than via the browser</p>
    </>
  )
}

