import "./select.scss";

import {JSelect, JOption} from "./select";

export default {
    title: "Atoms/Form Elements/Select",
};

export function Default() {
    return (
      <JSelect>
          <JOption value="">-- Select Option --</JOption>
          <JOption value="1">Option One</JOption>
          <JOption value="2">Option Two</JOption>
          <JOption value="3">Option Three</JOption>
          <JOption value="4">Option Four</JOption>
      </JSelect>
    )
}

export function WithError() {
    return (
      <JSelect error={true}>
          <JOption value="">-- Select Option --</JOption>
          <JOption value="1">Option One</JOption>
          <JOption value="2">Option Two</JOption>
          <JOption value="3">Option Three</JOption>
          <JOption value="4">Option Four</JOption>
      </JSelect>
    )
}
