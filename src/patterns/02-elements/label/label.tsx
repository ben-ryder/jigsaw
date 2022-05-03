import { StrictReactNode } from '../../../extras/strict-react-children';
import React, { ComponentProps } from 'react';
import classNames from 'classnames';

export interface LabelProps extends ComponentProps<'label'> {
  children: StrictReactNode,
  isHidden?: boolean,
}

export function Label(props: LabelProps) {
  return (
    <label
      className={
        classNames(
          "font-bold text-br-whiteGrey-100",
          {
            "hidden": props.isHidden
          }
        )
      }
      htmlFor={props.id}
    >
      {props.children}
    </label>
  )
}
