import {ReactNode} from "react";

export interface JLabelProps {
  children: ReactNode
}

export function JLabel(props: JLabelProps) {
  return (
    <label className="j-label">{props.children}</label>
  )
}
