import { JColourVariants } from "../../../00-foundations/colours/variants/colour-variants.js";
import classNames from "classnames";

export type JPillSize = 'rg' | 'sm'

export interface JPillProps {
  variant?: JColourVariants;
  size?: JPillSize;
  interactive?: boolean
}

export function getPillClassName(props: JPillProps) {
  return classNames(
    "j-pill",
    props.variant ? `j-pill--${props.variant}` : "",
    {
      "j-pill--interactive": props.interactive,
      "j-pill--sm": props.size === "sm",
    }
  )
}
