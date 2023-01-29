import React, {ComponentProps} from "react";

export const linkStyles = {
  regular: "underline underline-offset-2 text-br-whiteGrey-200 hover:text-br-teal-600"
}

export interface LinkProps extends ComponentProps<'a'> {
  as?: React.ElementType<LinkProps>
}

export function Link(props: LinkProps) {
  const {children, className, as, ...passThroughProps} = props;

  const processedClassName = props.className || linkStyles.regular;
  const Component = as || "a";

  return (
    <Component className={processedClassName} {...passThroughProps}>{children}</Component>
  )
}
