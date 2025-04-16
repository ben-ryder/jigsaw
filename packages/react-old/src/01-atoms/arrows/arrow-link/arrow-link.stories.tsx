import { JArrowLink } from "./arrow-link";
import { LinkHelper } from "../../links/link-handler";

export default {
  title: "Atoms/Arrows/Arrow Link",
  parameters: {
    status: {
      type: "stable",
    },
  },
};

export function RightArrow() {
  return <JArrowLink href="/">Read More</JArrowLink>;
}

export function LeftArrow() {
  return (
    <JArrowLink href="/" direction="left">
      Back
    </JArrowLink>
  );
}

export function Minimal() {
  return (
    <JArrowLink href="/" variant="minimal">
      View All
    </JArrowLink>
  );
}

export function AsProp() {
  return (
    <JArrowLink href="/" as={LinkHelper}>
      This is a link
    </JArrowLink>
  );
}
