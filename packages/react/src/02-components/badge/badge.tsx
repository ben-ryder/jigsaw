import {ElementType} from "react";
import classNames from "classnames";
import {ColourVariants} from "../../00-foundations/colours/variants/colour-variants.js";

export interface JBadgeProps {
  text: string
  variant?: ColourVariants,
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
    >{props.text}</div>
  )
}
