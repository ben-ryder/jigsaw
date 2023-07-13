import {ElementType} from "react";
import classNames from "classnames";
import {JColourVariants} from "../../00-foundations/colours/variants/colour-variants.js";

export interface JBadgeProps {
  text: string
  variant?: JColourVariants,
  href?: string,
  linkAs?: ElementType<'a'>
}

export function JBadge(props: JBadgeProps) {
  const className = classNames(
    "j-badge",
    props.variant ? `j-badge--${props.variant}` : "",
    {
      "j-badge--link": props.href
    }
  )

  if (props.href) {
    const Component = props.linkAs || "a";

    return (
      // @ts-ignore
      <Component className={className} href={props.href}>
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
