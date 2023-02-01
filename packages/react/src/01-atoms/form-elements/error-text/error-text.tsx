import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";

export interface JErrorTextProps extends ComponentProps<'p'> {
  children: ReactNode
}

export function JErrorText(props: JErrorTextProps) {
  const {className: suppliedClassName, children, ...htmlProps} = props;

  const className = classNames(
    "j-error-text",
    suppliedClassName
  );

  return (
    <p className={className} {...htmlProps}>{children}</p>
  )
}
