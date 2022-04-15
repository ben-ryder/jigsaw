import React, {ComponentProps} from 'react';

export type ButtonVariant = 'solid' | 'outline';
export type ButtonStyling = 'primary' | 'secondary' | 'constructive' | 'destructive';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  styling?: ButtonStyling
}

export function Button(props: ButtonProps) {
  return (
      <button {...props} />
  )
}
