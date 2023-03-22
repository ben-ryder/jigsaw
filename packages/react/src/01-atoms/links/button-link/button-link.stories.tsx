import {JButtonLink} from "./button-link";

export default {
  title: "Atoms/Links/Button Link",
};

export function Default() {
  return (
    <JButtonLink href="#">Default</JButtonLink>
  )
}

export function Secondary() {
  return (
    <JButtonLink variant="secondary" href="#">Secondary</JButtonLink>
  )
}

export function Tertiary() {
  return (
    <JButtonLink variant="tertiary" href="#">Tertiary</JButtonLink>
  )
}

export function Destructive() {
  return (
    <JButtonLink variant="destructive" href="#">Destructive</JButtonLink>
  )
}
