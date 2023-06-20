import "./select.scss";

import {JSelect} from "./select";

export default {
  title: "Atoms/Form Elements/Select",
  parameters: {
    status: {
      type: "unstable"
    }
  }
};

export function Default() {
    return (
      <JSelect
        options={[
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
        ]}
      />
    )
}

export function WithError() {
    return (
      <JSelect
        error={true}
        options={[
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
        ]}
      />
    )
}
