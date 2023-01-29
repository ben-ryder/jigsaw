import {ComponentProps} from "react";
import classNames from "classnames";
import {JButtonVariant} from "../button/button";

export interface JButtonLinkProps extends ComponentProps<'a'> {
  variant?: JButtonVariant,
}

export function JButtonLink(props: JButtonLinkProps) {
  const {className, variant, children, ...htmlProps} = props;

  const processedClassName = classNames(
    "j-button-link",
    {
      "j-button-link--secondary": variant === "secondary",
      "j-button-link--tertiary": variant === "tertiary",
      "j-button-link--destructive": variant === "destructive"
    }
  );

  return (
    <a className={processedClassName} {...htmlProps}>{children}</a>
  )
}