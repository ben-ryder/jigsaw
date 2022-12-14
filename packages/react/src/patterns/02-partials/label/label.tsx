import { StrictReactNode } from '../../../extras/strict-react-children';
import React, {ComponentProps, forwardRef} from 'react';
import classNames from 'classnames';

export interface LabelProps extends ComponentProps<'label'> {
  children: StrictReactNode,
  isHidden?: boolean,
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {isHidden, ...passThroughProps} = props;

  return (
    <label
      {...passThroughProps}
      className={
        classNames(
          "font-bold text-br-whiteGrey-100",
          {
            "hidden": props.isHidden
          }
        )
      }
      ref={ref}
    >
      {props.children}
    </label>
  )
})
