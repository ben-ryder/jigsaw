import { ComponentProps, ElementType } from "react";
import classNames from "classnames";
import { JButtonVariant } from "../../button/button/button.js";

export interface JButtonLinkProps extends ComponentProps<"a"> {
  variant?: JButtonVariant;
  as?: ElementType<JButtonLinkProps>;
}

export function JButtonLink(props: JButtonLinkProps) {
  const {
    className: suppliedClassName,
    variant,
    children,
    as,
    ...htmlProps
  } = props;

  const Component = as || "a";

  const className = classNames(
    "j-button-link",
    {
      "j-button-link--secondary": variant === "secondary",
      "j-button-link--tertiary": variant === "tertiary",
      "j-button-link--destructive": variant === "destructive",
    },
    suppliedClassName
  );

  return (
    <Component className={className} {...htmlProps}>
      {children}
    </Component>
  );
}
