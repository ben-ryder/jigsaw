import { ComponentProps, ElementType } from "react";
import classNames from "classnames";
import {
  ArrowRight as RightArrowIcon,
  ArrowLeft as LeftArrowIcon,
} from "lucide-react";

export type JArrowVariant = "normal" | "minimal"
export type JArrowDirection = "left" | "right"

export interface JArrowLinkProps extends ComponentProps<"a"> {
  direction?: JArrowDirection;
  as?: ElementType<JArrowLinkProps>;
  variant?: JArrowVariant;
}

export function JArrowLink(props: JArrowLinkProps) {
  const {
    className: suppliedClassName,
    direction,
    children,
    as,
    ...htmlProps
  } = props;

  const Component = as || "a";

  const className = classNames(
    "j-arrow",
    {
      "j-arrow--left": props.direction === "left",
      "j-arrow--minimal": props.variant === "minimal"
    },
    suppliedClassName
  );

  return (
    <Component className={className} {...htmlProps}>
      <LeftArrowIcon className="j-icon j-arrow__icon-left" />
      {children}
      <RightArrowIcon className="j-icon j-arrow__icon-right" />
    </Component>
  );
}
