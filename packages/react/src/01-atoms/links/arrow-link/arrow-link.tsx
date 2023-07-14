import { ComponentProps, ElementType, ReactNode } from "react";
import classNames from "classnames";
import {
  ArrowRight as RightArrowIcon,
  ArrowLeft as LeftArrowIcon,
} from "lucide-react";

export interface JArrowLinkProps extends ComponentProps<"a"> {
  direction?: "left" | "right";
  as?: ElementType<JArrowLinkProps>;
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
