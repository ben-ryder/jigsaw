import { ReactNode } from "react";
import classNames from "classnames";
import { JColourVariants } from "../../00-foundations/colours/variants/colour-variants.js";

export type JIconSize = "sm" | "rg" | "md" | "lg" | "xl";

export interface JIconProps {
  size?: JIconSize;
  variant?: JColourVariants;
  children: ReactNode;
  className?: string;
}

export function JIcon(props: JIconProps) {
  const { size, variant, children } = props;

  const className = classNames(
    "j-icon",
    size ? `j-icon--${size}` : "",
    variant ? `j-icon--${variant}` : "",
    props.className
  );

  return <div className={className}>{children}</div>;
}
