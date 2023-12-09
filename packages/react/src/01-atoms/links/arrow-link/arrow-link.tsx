import { ComponentProps, ElementType, ReactNode } from "react";
import classNames from "classnames";
import {
  ArrowRight as RightArrowIcon,
  ArrowLeft as LeftArrowIcon,
} from "lucide-react";

export type JArrowLinkVariant = "normal" | "minimal"

export interface JArrowLinkProps extends ComponentProps<"a"> {
  direction?: "left" | "right";
  as?: ElementType<JArrowLinkProps>;
  variant?: JArrowLinkVariant;
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
    "j-arrow-link",
    {
      "j-arrow-link--left": props.direction === "left",
      "j-arrow-link--minimal": props.variant === "minimal"
    },
    suppliedClassName
  );

  return (
    <Component className={className} {...htmlProps}>
      <LeftArrowIcon className="j-icon j-arrow-link__icon-left" />
      {children}
      <RightArrowIcon className="j-icon j-arrow-link__icon-right" />
    </Component>
  );
}
