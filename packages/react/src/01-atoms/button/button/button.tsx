import { ComponentProps } from "react";
import classNames from "classnames";
import { Loader2 as LoadingIcon } from "lucide-react";

export type JButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive";

export interface JButtonProps extends ComponentProps<"button"> {
  variant?: JButtonVariant;
  loading?: boolean;
}

export function JButton(props: JButtonProps) {
  const {
    className: suppliedClassName,
    variant,
    loading,
    children,
    ...htmlProps
  } = props;

  const className = classNames(
    "j-button",
    {
      "j-button--secondary": variant === "secondary",
      "j-button--tertiary": variant === "tertiary",
      "j-button--destructive": variant === "destructive",
      "j-button--loading": loading === true,
    },
    suppliedClassName
  );

  return (
    <button className={className} {...htmlProps}>
      {children}
      {props.loading && <LoadingIcon className="j-icon" />}
    </button>
  );
}
