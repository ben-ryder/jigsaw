import React, {ComponentProps} from 'react';

import {StrictReactNode} from "../../../extras/strict-react-children";

export interface IconButtonProps extends ComponentProps<'button'> {
  label: string,
  icon: StrictReactNode,
  onClick: () => void
}


export function IconButton(props: IconButtonProps) {
  const {label, icon, ...passThroughProps} = props;

  return (
    <button aria-label={props.label} {...passThroughProps}>
      {props.icon}
    </button>
  )
}
