import {JBadge} from "./badge";

export default {
  title: "Components/Badge",
};

export function Default() {
  return (
    <JBadge>This is a badge</JBadge>
  )
}

export function Colours() {
  return (
    <>
      <JBadge variant="blueGrey">This is a badge</JBadge>
      <JBadge variant="white">This is a badge</JBadge>
      <JBadge variant="red">This is a badge</JBadge>
      <JBadge variant="green">This is a badge</JBadge>
      <JBadge variant="orange">This is a badge</JBadge>
      <JBadge variant="yellow">This is a badge</JBadge>
      <JBadge variant="blue">This is a badge</JBadge>
      <JBadge variant="purple">This is a badge</JBadge>
      <JBadge variant="pink">This is a badge</JBadge>
    </>
  )
}
