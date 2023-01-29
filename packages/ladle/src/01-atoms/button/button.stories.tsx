import {JButton, JButtonVariant} from "./button";

export default {
  title: "Atoms/Button",
};

export function Default() {
  return (
    <JButton>Default</JButton>
  )
}
export function DefaultDisabled() {
  return (
    <JButton disabled>Default Disabled</JButton>
  )
}
export function DefaultLoading() {
  return (
    <JButton loading={true}>Default Loading</JButton>
  )
}
