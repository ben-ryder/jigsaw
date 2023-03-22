import {JInput} from "./input";

export default {
    title: "Atoms/Form Elements/Input",
};

export function Default() {
    return (
      <JInput placeholder="Default Input" />
    )
}

export function WithError() {
    return (
      <JInput placeholder="This Input has an issue" error={true} />
    )
}
