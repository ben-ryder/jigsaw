import { ReactNode } from "react";
import classNames from "classnames";
import {
  Info as InfoIcon,
  AlertTriangle as WarningIcon,
  XOctagon as DangerIcon,
  CheckCircle as SuccessIcon
} from "lucide-react";

export type JCalloutVariant = "critical" | "warning" | "success";

export interface JCalloutProps {
  children: ReactNode;
  variant?: JCalloutVariant;
}

export function JCallout(props: JCalloutProps) {
  const { children, variant } = props;

  const className = classNames(
    "j-callout",
    variant ? `j-callout--${variant}` : ""
  );

  let icon;
  if (variant === "critical") {
    icon = <DangerIcon className="j-icon" />;
  }
  else if (variant === "warning") {
    icon = <WarningIcon className="j-icon" />;
  }
  else if (variant === "success") {
    icon = <SuccessIcon className="j-icon" />;
  }
  else {
    icon = <InfoIcon className="j-icon" />;
  }

  return (
    <div className={className}>
      <div className="j-callout__icon">{icon}</div>
      <div className="j-callout__content">{children}</div>
    </div>
  );
}
