import { JColourVariants } from "../../../00-foundations/colours/variants/colour-variants.js";
import classNames from "classnames";
import {ReactNode} from "react";

export type JPillSize = 'rg' | 'sm'

export interface JPillBaseProps {
  variant?: JColourVariants;
  size?: JPillSize;
  interactive?: boolean
}

export function getPillClassName(props: JPillBaseProps) {
  return classNames(
    "j-pill",
    props.variant ? `j-pill--${props.variant}` : "",
    {
      "j-pill--interactive": props.interactive,
      "j-pill--sm": props.size === "sm",
    }
  )
}

export interface JPillProps extends JPillBaseProps {
  children: ReactNode
}

export function JPill(props: JPillProps) {
  const className = getPillClassName(props)

  return (
    <div className={className}>{props.children}</div>
  )
}
