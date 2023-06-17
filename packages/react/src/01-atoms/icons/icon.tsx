import {ReactNode} from "react";
import classNames from "classnames";

export type JIconSize =  "sm" | "rg" | "md" | "lg" | "xl";

export type JIconVariant =
  "teal" |
  "blueGrey" |
  "white" |
  "red" |
  "green" |
  "orange" |
  "yellow" |
  "blue" |
  "purple" |
  "pink";

export interface JIconProps {
  size?: JIconSize,
  variant?: JIconVariant,
  children: ReactNode
}

export function JIcon(props: JIconProps) {
  const {size, variant, children} = props;

  const className = classNames(
    "j-icon",
    size ? `j-icon--${size}` : "",
    variant ? `j-icon--${variant}` : ""
  );

  return (
    <div className={className}>
      {children}
    </div>
  )
}
