import { JErrorText } from "./error-text";

export default {
  title: "Atoms/Form Elements/ErrorText",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function ErrorText() {
  return <JErrorText>This is used for a form element error</JErrorText>;
}
