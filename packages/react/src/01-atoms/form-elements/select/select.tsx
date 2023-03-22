import {ComponentProps} from "react";
import classNames from "classnames";

export interface JSelectProps extends ComponentProps<'select'> {
    error?: boolean
}

export function JSelect(props: JSelectProps) {
    const {className: suppliedClassName, children, error, ...htmlProps} = props;

    const className = classNames(
      "j-select",
      {
          "j-select--error": error
      },
      suppliedClassName
    );

    return (
      <select className={className} {...htmlProps}>{children}</select>
    )
}

export interface JSelectOptionProps extends ComponentProps<'option'> {}

export function JOption(props: JSelectOptionProps) {
    const {className: suppliedClassName, children, ...htmlProps} = props;

    const className = classNames(
      "j-select__option",
      suppliedClassName
    );

    return (
      <option className={className} {...htmlProps}>{children}</option>
    )
}
