import "./badge.scss";

import {ReactNode} from "react";
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

export interface JBadgeProps {
  children: ReactNode,
  variant?: JBadgeVariant
}

export function JBadge(props: JBadgeProps) {
  const {children, variant, ...htmlProps} = props;

  const className = classNames(
    "j-badge",
    variant ? `j-badge--${variant}` : ""
  )

  return (
    <label className={className} {...htmlProps}>{children}</label>
  )
}
