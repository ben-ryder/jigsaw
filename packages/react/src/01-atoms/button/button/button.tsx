import { ComponentProps, ForwardedRef, forwardRef } from "react";
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

export const JButton = forwardRef((
  props: JButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
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
    <button ref={ref} className={className} {...htmlProps}>
      {children}
      {props.loading && <LoadingIcon className="j-icon j-toolkit-animation-spin" />}
    </button>
  );
})
