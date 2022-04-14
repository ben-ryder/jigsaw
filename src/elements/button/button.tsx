import React, {ComponentProps} from 'react';

export type ButtonVariant = 'solid' | 'outline';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
  return (
      <button {...props}>{props.variant}</button>
  )
}
