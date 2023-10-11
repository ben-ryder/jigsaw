import {ComponentProps, ElementType} from "react";
import classNames from "classnames";
import {getPillClassName, JPillProps} from "../pill/pill.js";

export interface JPillLinkProps extends JPillProps, ComponentProps<'a'> {
  linkAs?: ElementType<JPillLinkProps>;
}

export function JPillLink(props: JPillLinkProps) {
  const {
    linkAs,
    size,
    interactive,
    variant,
    className: suppliedClassName,
    ...htmlProps
  } = props;

  const className = classNames(
    "j-pill-link",
    getPillClassName({size, variant, interactive: true}),
    suppliedClassName
  );

  const Component = linkAs || "a";

  return (
    // @ts-ignore
    <Component className={className} {...htmlProps}>
      {props.children}
    </Component>
  );
}
