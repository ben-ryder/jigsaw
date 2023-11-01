import {ComponentProps, ForwardedRef, forwardRef} from "react";
import classNames from "classnames";
import { JLabel } from "../label/label.js";
import { JErrorText } from "../error-text/error-text.js";

export interface JInputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  hideLabel?: boolean;
}

export const JInput = forwardRef((props: JInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { label, hideLabel, error, className: propsClassName, ...htmlProps } = props;

  const className = classNames(
    "j-input",
    {
      "j-input--error": error,
    },
    propsClassName
  );

  return (
    <div className={className}>
      <JLabel htmlFor={props.id} hidden={hideLabel}>
        {label}
      </JLabel>
      <input ref={ref} className="j-input__element" {...htmlProps} />
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
})
