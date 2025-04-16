import { JLabel } from "../label/label.js";
import { JErrorText } from "../error-text/error-text.js";
import {ComponentProps, ForwardedRef, forwardRef} from "react";
import classNames from "classnames";
import { JTooltipProps } from "../../../02-components/tooltip/tooltip.js";

export interface JOptionData {
  text: string;
  value: string;
}

export interface JSelectProps extends ComponentProps<"select"> {
  label: string;
  hideLabel?: boolean;
  options: JOptionData[];
  error?: string;
  tooltip?: JTooltipProps;
}

export const JSelect = forwardRef((props: JSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {label, hideLabel, options, error, className: propsClassName ,...htmlProps} = props

  const className = classNames("j-select", {
    "j-select--error": props.error,
  });

  return (
    <div className={className}>
      <JLabel htmlFor={htmlProps.id} hidden={props.hideLabel} tooltip={props.tooltip}>
        {props.label}
      </JLabel>
      <select
        ref={ref}
        className="j-select__element"
        {...htmlProps}
      >
        {props.options.map((option) => (
          <option key={option.value} className="j-select__option" value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
})
