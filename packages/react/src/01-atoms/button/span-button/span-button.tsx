import { ReactNode } from "react";
import classNames from "classnames";
import { Loader2 as LoadingIcon } from "lucide-react";
import { JButtonVariant } from "../button/button.js";

export interface JSpanButtonProps {
  className?: string
  variant?: JButtonVariant
  loading?: boolean
  disabled?: boolean
  children: ReactNode
}

export function JSpanButton(props: JSpanButtonProps) {
  const {
    className: suppliedClassName,
    variant,
    loading,
    children,
    disabled
  } = props;

  const className = classNames(
    "j-button",
    {
      "j-button--secondary": variant === "secondary",
      "j-button--tertiary": variant === "tertiary",
      "j-button--destructive": variant === "destructive",
      "j-button--loading": loading === true,
      "j-button--disabled": disabled === true,
    },
    suppliedClassName
  );

  return (
    <span className={className}>
      {children}
      {props.loading && <LoadingIcon className="j-icon" />}
    </span>
  );
}
