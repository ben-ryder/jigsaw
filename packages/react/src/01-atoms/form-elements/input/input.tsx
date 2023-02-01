import {ComponentProps} from "react";
import classNames from "classnames";

export interface JInputProps extends ComponentProps<'input'> {
    error?: boolean
}

export function JInput(props: JInputProps) {
    const {className: suppliedClassName, children, error, ...htmlProps} = props;

    const className = classNames(
      "j-input",
      {
          "j-input--error": error
      },
      suppliedClassName
    );

    return (
      <input className={className} {...htmlProps} />
    )
}