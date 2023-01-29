import React, {ComponentProps, ElementType} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import classNames from "classnames";

export const arrowLinkStyles = {
  regular: "font-bold underline-offset-2 text-br-whiteGrey-200 hover:underline hover:text-br-teal-600 focus:underline focus:text-br-teal-600"
}

export interface ArrowLinkProps extends ComponentProps<'a'> {
  direction: "left" | "right",
  as?: React.ElementType<ArrowLinkProps>
}

export function ArrowLink(props: ArrowLinkProps) {
  const {children, className: passedClassName, as, ...passThroughProps} = props;

  const processedClassName = passedClassName || arrowLinkStyles.regular;
  const className = classNames(
    processedClassName,
    "flex"
  )

  const Component = as || "a";

  return (
    <Component className={className} {...passThroughProps}>
      {props.direction === "left" && <ArrowLeft className="mr-0.5" /> }
      <span>{children}</span>
      {props.direction === "right" && <ArrowRight className="ml-0.5" /> }
    </Component>
  )
}
