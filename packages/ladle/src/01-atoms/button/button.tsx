import {ComponentProps} from "react";
import classNames from "classnames";

export type JButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

export interface JButtonProps extends ComponentProps<'button'> {
  variant?: JButtonVariant,
  loading?: boolean
}

export function JButton(props: JButtonProps) {
  const {className, variant, loading, children, ...htmlProps} = props;

  const processedClassName = classNames(
    "j-button",
    {
      "j-button--secondary": variant === "secondary",
      "j-button--tertiary": variant === "tertiary",
      "j-button--destructive": variant === "destructive",
      "j-button--loading": loading === true,
    }
  );

  return (
    <button className={processedClassName} {...htmlProps}>{children}</button>
  )
}