import React from 'react';
import classNames from "classnames";

import {StrictReactNode} from "../../../extras/strict-react-children";

export interface TagsProps {
  text: string,
  bgColor?: string,
  fgColor?: string,
  rightContent?: StrictReactNode,
}

export function Tag(props: TagsProps) {
  const className = classNames(
    "inline-block rounded",
    {
      "bg-br-teal-600 text-br-whiteGrey-50" : !props.bgColor && !props.fgColor
    }
  )

  let style = {};
  if (props.bgColor && props.fgColor) {
    style = {
      backgroundColor: props.bgColor,
      color: props.fgColor
    }
  }

  return (
    <div className={className} style={style}>
      <span className="px-1.5 py-0.5">
        {props.text}
      </span>
      {props.rightContent && props.rightContent}
    </div>
  )
}
