import {ComponentProps} from "react";
import classNames from "classnames";

export interface JInputProps extends ComponentProps<'input'> {
    error?: boolean
}

export function JInput(props: JInputProps) {
    const {className, children, ...htmlProps} = props;

    const processedClassName = classNames(
      "j-input",
    );

    return (
      <input className={processedClassName} {...htmlProps} />
    )
}