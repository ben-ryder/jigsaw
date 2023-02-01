import {JSelect, JSelectOption} from "./select";

export default {
    title: "Atoms/Select",
};

export function Default() {
    return (
      <JSelect>
          <JSelectOption value="">-- Select Option --</JSelectOption>
          <JSelectOption value="1">Option One</JSelectOption>
          <JSelectOption value="2">Option Two</JSelectOption>
          <JSelectOption value="3">Option Three</JSelectOption>
          <JSelectOption value="4">Option Four</JSelectOption>
      </JSelect>
    )
}

export function WithError() {
    return (
      <JSelect error={true}>
          <JSelectOption value="">-- Select Option --</JSelectOption>
          <JSelectOption value="1">Option One</JSelectOption>
          <JSelectOption value="2">Option Two</JSelectOption>
          <JSelectOption value="3">Option Three</JSelectOption>
          <JSelectOption value="4">Option Four</JSelectOption>
      </JSelect>
    )
}
