import React from 'react';

import { Button as ButtonBase, ButtonProps } from './button.base';
import classNames from 'classnames';


export function Button(props: ButtonProps) {
  const {className, ...passThroughProps} = props;

  const processedClassName = classNames(
    className,
    "px-3 py-2 rounded-md",
    "transition-colors",
    {
      'bg-teal-600 text-white hover:bg-teal-700': !props.styling || props.styling === 'primary',
      'bg-white text-black hover:bg-grey-700': props.styling === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': props.styling === 'destructive',
      'bg-green-600 text-white hover:bg-green-700': props.styling === 'constructive'
    },
  )

  return (
    <ButtonBase className={processedClassName} {...passThroughProps} />
  )
}
