import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";

export interface JLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
  hidden?: boolean;
}

export function JLabel(props: JLabelProps) {
  const {
    className: suppliedClassName,
    children,
    hidden,
    ...htmlProps
  } = props;

  const className = classNames("j-label", suppliedClassName, {
    "j-hidden": hidden,
  });

  return (
    <label className={className} {...htmlProps}>
      {children}
    </label>
  );
}
