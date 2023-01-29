import {ReactNode} from "react";

export interface JErrorTextProps {
  children: ReactNode
}

export function JErrorText(props: JErrorTextProps) {
  return (
    <p className="j-error-text">{props.children}</p>
  )
}
