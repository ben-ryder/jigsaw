import { ComponentProps, ReactNode } from "react";
import classNames from "classnames";
import { HelpCircleIcon } from "lucide-react"
import { JTooltip, JTooltipProps } from "../../../02-components/tooltip/tooltip.js";
import { JIcon } from "../../icons/icon.js";

export interface JLabelProps extends ComponentProps<"label"> {
  children: ReactNode;
  hidden?: boolean;
  tooltip?: JTooltipProps
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
    "j-label--with-icon": props.tooltip
  });

  return (
    <div className={className}>
      <label className="j-label__label" {...htmlProps}>
        {children}
      </label>
      {props.tooltip &&
        <JTooltip {...props.tooltip}>
          <JIcon size='sm'><HelpCircleIcon /></JIcon>
        </JTooltip>
      }
    </div>
  );
}
