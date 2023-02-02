import "./content-section.scss";

import {ReactNode} from "react";
import classNames from "classnames";

export interface JContentSectionProps {
  children: ReactNode
}

export function JContentSection(props: JContentSectionProps) {
  const className = classNames(
    "j-content-section"
  );

  return (
    <div className={className}>{props.children}</div>
  )
}
