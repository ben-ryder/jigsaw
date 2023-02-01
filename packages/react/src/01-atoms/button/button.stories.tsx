import {JButton, JButtonVariant} from "./button";

export default {
  title: "Atoms/Button",
};

export function Default() {
  return (
    <>
      <JButton>Default</JButton>
      <JButton disabled={true}>Default Disabled</JButton>
      <JButton loading={true}>Default Loading</JButton>
    </>
  )
}

export function Destructive() {
  return (
    <>
      <JButton variant="destructive">Destructive</JButton>
      <JButton variant="destructive" disabled={true}>Destructive Disabled</JButton>
      <JButton variant="destructive" loading={true}>Destructive Loading</JButton>
    </>
  )
}

export function Secondary() {
  return (
    <>
      <JButton variant="secondary">Secondary</JButton>
      <JButton variant="secondary" disabled={true}>Secondary Disabled</JButton>
      <JButton variant="secondary" loading={true}>Secondary Loading</JButton>
    </>
  )
}

export function Tertiary() {
  return (
    <>
      <JButton variant="tertiary">Tertiary</JButton>
      <JButton variant="tertiary" disabled={true}>Tertiary Disabled</JButton>
      <JButton variant="tertiary" loading={true}>Tertiary Loading</JButton>
    </>
  )
}
