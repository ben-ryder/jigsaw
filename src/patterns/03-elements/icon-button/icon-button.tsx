import React, {ComponentProps} from 'react';

import {StrictReactNode} from "../../../extras/strict-react-children";

export interface IconButtonProps extends ComponentProps<'button'> {
  label: string,
  icon: StrictReactNode,
  onClick: () => void
}

export const defaultIconProps = {
  sizingClassName: "h-8 w-8",
  colorClassName: "text-br-teal-600 hover:text-br-teal-700 focus:text-br-teal-700 active:text-br-teal-700",
}

export function IconButton(props: IconButtonProps) {
  const {label, icon, ...passThroughProps} = props;

  return (
    <button aria-label={props.label} {...passThroughProps}>
      {props.icon}
    </button>
  )
}
