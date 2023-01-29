import {ComponentProps} from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

export interface ButtonProps extends ComponentProps<'button'>{
  variant?: ButtonVariant
}

export function Button(props: ButtonProps) {
  const classNames = ["j-button"];
  if (props.variant) {
    
  }

  return (
    <button >{props.children}</button>
  )
}