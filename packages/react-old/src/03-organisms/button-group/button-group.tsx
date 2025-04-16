import { ReactNode } from "react";
import classNames from "classnames";

export interface JButtonGroupProps {
  children: ReactNode;
  align?: "left" | "right";
  separateEnd?: boolean;
  className?: string;
}

export function JButtonGroup(props: JButtonGroupProps) {
  const className = classNames(
    "j-button-group",
    {
      "j-button-group--left": props.align === "left",
      "j-button-group--separate-end": props.separateEnd,
    },
    props.className
  );

  return <div className={className}>{props.children}</div>;
}
