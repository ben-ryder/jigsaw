import classNames from "classnames";
import { JLabel } from "../label/label.js";
import { JErrorText } from "../error-text/error-text.js";
import {ComponentProps, ForwardedRef, forwardRef} from "react";

export interface JTextAreaProps extends ComponentProps<"textarea"> {
  label: string;
  error?: string;
  hideLabel?: boolean;
}

export const JTextArea = forwardRef((props: JTextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const { label, error, hideLabel, className: propsClassName, ...htmlProps } = props;

  const className = classNames(
    "j-textarea",
    {
      "j-textarea--error": error,
    },
    propsClassName
  );

  return (
    <div className={className}>
      <JLabel htmlFor={props.id} hidden={props.hideLabel}>
        {props.label}
      </JLabel>
      <textarea ref={ref} className="j-textarea__element" {...htmlProps} />
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
})
