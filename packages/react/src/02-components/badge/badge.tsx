import {CSSProperties, ElementType, ReactNode} from "react";
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
  text: string
  variant?: JBadgeVariant,
  style?: CSSProperties,
  href?: string,
  linkAs?: ElementType<'a'>
}

export function JBadge(props: JBadgeProps) {
  const className = classNames(
    "j-badge",
    props.variant ? `j-badge--${props.variant}` : "",
  )

  if (props.href) {
    const Component = props.linkAs || "a";

    return (
      // @ts-ignore
      <Component className={className} style={props.style} href={props.href}>
        {props.text}
      </Component>
    )
  }

  return (
    <div
      className={className}
      style={props.style}
    >{props.text}</div>
  )
}
