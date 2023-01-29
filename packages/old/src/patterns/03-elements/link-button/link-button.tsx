import React, { ComponentProps } from 'react';

import {ButtonStyling, ButtonVariant, processButtonStyling} from "../button/button";

export interface LinkButtonProps extends ComponentProps<'a'> {
  variant?: ButtonVariant;
  styling?: ButtonStyling;
  as?: React.ElementType<LinkButtonProps>;
}


export function LinkButton(props: LinkButtonProps) {
  const {className, children, variant, styling, as, ...passThroughProps} = props;
  const processedClassName = processButtonStyling(props);

  const Component = as || "a";

  return (
    <Component
      className={processedClassName}
      {...passThroughProps}
    >
      {props.children}
    </Component>
  )
}
