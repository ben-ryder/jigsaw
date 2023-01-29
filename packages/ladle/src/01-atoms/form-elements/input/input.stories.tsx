import {JInput} from "./input";

export default {
    title: "Atoms/Button",
};

export function Default() {
    return (
      <JInput placeholder="Default Input" />
    )
}

export function WithError() {
    return (
      <JInput placeholder="Default Input" error={true} />
    )
}