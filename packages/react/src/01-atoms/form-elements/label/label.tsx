import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";

export interface JLabelProps extends ComponentProps<'label'> {
  children: ReactNode
}

export function JLabel(props: JLabelProps) {
  const {className: suppliedClassName, children, ...htmlProps} = props;

  const className = classNames(
    "j-label",
    suppliedClassName
  )

  return (
    <label className={className} {...htmlProps}>{children}</label>
  )
}
