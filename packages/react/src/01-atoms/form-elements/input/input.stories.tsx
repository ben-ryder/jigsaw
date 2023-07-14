import { JInput } from "./input";

export default {
  title: "Atoms/Form Elements/Input",
  parameters: {
    status: {
      type: "unstable",
    },
  },
};

export function Default() {
  return <JInput placeholder="Default Input" />;
}

export function WithError() {
  return <JInput placeholder="This input has an issue..." error={true} />;
}
