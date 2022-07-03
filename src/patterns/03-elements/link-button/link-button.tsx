import React, { ComponentProps } from 'react';

import {ButtonStyling, ButtonVariant, processButtonStyling} from "../button/button";


export interface LinkButtonProps extends ComponentProps<'a'> {
  variant?: ButtonVariant;
  styling?: ButtonStyling;
}


export function LinkButton(props: LinkButtonProps) {
  const {className, children, variant, styling, ...passThroughProps} = props;
  const processedClassName = processButtonStyling(props);

  return (
    <a
      className={processedClassName}
      {...passThroughProps}
    >
      {props.children}
    </a>
  )
}
