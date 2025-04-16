import { ReactNode } from "react";
import classNames from "classnames";

export interface JProseProps {
  children?: ReactNode;
  html?: string;
  className?: string
}

export function JProse(props: JProseProps) {
  const className = classNames("j-prose", props.className);

  if (props.html) {
    return (
      <div className={className} dangerouslySetInnerHTML={{__html: props.html}}>
        {props.children}
      </div>
    );
  }

  return (
    <div className={className}>{props.children}</div>
  );
}
