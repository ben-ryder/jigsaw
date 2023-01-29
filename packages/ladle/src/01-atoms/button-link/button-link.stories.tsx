import {ButtonLink} from "./button-link";

export default {
  title: "Atoms/Button",
};

export function Default() {
  return (
    <ButtonLink href="#">Default</ButtonLink>
  )
}

export function Secondary() {
  return (
    <ButtonLink variant="secondary" href="#">Secondary</ButtonLink>
  )
}

export function Tertiary() {
  return (
    <ButtonLink variant="tertiary" href="#">Secondary</ButtonLink>
  )
}

export function Destructive() {
  return (
    <ButtonLink variant="destructive" href="#">Secondary</ButtonLink>
  )
}
