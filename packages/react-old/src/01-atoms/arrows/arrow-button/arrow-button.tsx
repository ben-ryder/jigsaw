import { ComponentProps} from "react";
import classNames from "classnames";
import {
  ArrowRight as RightArrowIcon,
  ArrowLeft as LeftArrowIcon,
} from "lucide-react";
import { JArrowDirection, JArrowVariant } from "../arrow-link/arrow-link.js";

export interface JArrowButtonProps extends ComponentProps<"button"> {
  direction?: JArrowDirection
  variant?: JArrowVariant;
}

export function JArrowButton(props: JArrowButtonProps) {
  const {
    className: suppliedClassName,
    direction,
    children,
    ...htmlProps
  } = props;

  const className = classNames(
    "j-arrow",
    {
      "j-arrow--left": props.direction === "left",
      "j-arrow--minimal": props.variant === "minimal"
    },
    suppliedClassName
  );

  return (
    <button className={className} {...htmlProps}>
      <LeftArrowIcon className="j-icon j-arrow__icon-left" />
      {children}
      <RightArrowIcon className="j-icon j-arrow__icon-right" />
    </button>
  );
}
