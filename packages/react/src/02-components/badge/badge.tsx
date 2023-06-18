import {CSSProperties, ReactNode} from "react";
import classNames from "classnames";

export type JBadgeVariant =
  "blueGrey" |
  "white" |
  "red" |
  "green" |
  "orange" |
  "yellow" |
  "blue" |
  "purple" |
  "pink";

export interface JBadgeCustomStyle {
  backgroundColour: string,
  color: string
}

export interface JBadgeProps {
  children: ReactNode,
  variant?: JBadgeVariant,
  style?: CSSProperties
}

export function JBadge(props: JBadgeProps) {
  const className = classNames(
    "j-badge",
    props.variant ? `j-badge--${props.variant}` : ""
  )

  return (
    <label
      className={className}
      style={props.style}
    >{props.children}</label>
  )
}
