import {ComponentProps} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";
import classNames from "classnames";

export const linkStyles = {
  regular: "font-bold underline-offset-2 text-br-whiteGrey-200 hover:underline hover:text-br-teal-600 focus:underline focus:text-br-teal-600"
}

export interface ArrowLinkProps extends ComponentProps<'a'> {
  direction: "left" | "right"
}

export function ArrowLink(props: ArrowLinkProps) {
  const {children, className: passedClassName, ...passThroughProps} = props;

  const processedClassName = passedClassName || linkStyles.regular;

  const className = classNames(
    processedClassName,
    "flex"
  )

  return (
    <a className={className} {...passThroughProps}>
      {props.direction === "left" && <ArrowLeft className="mr-0.5" /> }
      <span>{children}</span>
      {props.direction === "right" && <ArrowRight className="ml-0.5" /> }
    </a>
  )
}
