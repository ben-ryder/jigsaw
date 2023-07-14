import { ReactNode } from "react";

export interface JProseProps {
  children: ReactNode;
}

export function JProse(props: JProseProps) {
  return <div className="j-prose">{props.children}</div>;
}
