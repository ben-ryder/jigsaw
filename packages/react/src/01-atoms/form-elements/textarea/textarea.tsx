import "./textarea.scss";

import {ComponentProps} from "react";
import classNames from "classnames";

export interface JTextAreaProps extends ComponentProps<'textarea'> {
    error?: boolean
}

export function JTextArea(props: JTextAreaProps) {
    const {className: suppliedClassName, children, error, ...htmlProps} = props;

    const className = classNames(
      "j-textarea",
      {
          "j-textarea--error": error
      },
      suppliedClassName
    );

    return (
      <textarea className={className} {...htmlProps} />
    )
}
