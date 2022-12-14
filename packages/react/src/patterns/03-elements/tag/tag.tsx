import React, {forwardRef} from 'react';
import classNames from "classnames";

import {StrictReactNode} from "../../../extras/strict-react-children";
import {colourPalette} from "../../01-base/colour-palette/colour-palette";

export interface TagsProps {
  text: string,
  backgroundColour?: string | null,
  textColour?: string | null,
  rightContent?: StrictReactNode,
  className?: string
}

export function Tag(props: TagsProps) {
  return (
    <div
      className={classNames(
        "inline-flex justify-center items-center px-1.5 py-0.5 rounded font-sm",
        props.className
      )}
      style={{
        backgroundColor: props.backgroundColour || colourPalette.teal["600"],
        color: props.textColour || colourPalette.whiteGrey["50"]
      }}
    >
      <span className={classNames("whitespace-nowrap", {"mr-[5px]": props.rightContent})}>
        {props.text}
      </span>
      {props.rightContent && props.rightContent}
    </div>
  )
}
