import {JTextArea} from "./textarea";

export default {
    title: "Atoms/Form Elements/Textarea",
};

export function Default() {
    return (
      <JTextArea placeholder="Enter text here..." rows={5} />
    )
}

export function WithError() {
    return (
      <JTextArea placeholder="There's something wrong here..." error={true} rows={5} />
    )
}
