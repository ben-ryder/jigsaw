import classNames from "classnames";
import {XIcon as RemoveIcon} from "lucide-react";
import {JIcon} from "../../01-atoms/icons/icon.js";
import {CSSProperties, StyleHTMLAttributes} from "react";

export type JTagVariant =
  "blueGrey" |
  "white" |
  "red" |
  "green" |
  "orange" |
  "yellow" |
  "blue" |
  "purple" |
  "pink";

export interface JTagProps {
  text: string,
  value: string,
  onRemove: (value: string) => void,
  variant?: JTagVariant,
  getA11yRemoveText?: (text: string) => string,
  style?: CSSProperties
}

export function JTag(props: JTagProps) {
  const className = classNames(
    "j-tag",
    props.variant ? `j-tag--${props.variant}` : ""
  )

  return (
    <div
      className={className}
      style={props.style}
    >
      {props.text}
      <button
        aria-label={props.getA11yRemoveText ? props.getA11yRemoveText(props.text) : `remove ${props.text} tag`}
        className="j-tag__remove-button"
        onClick={() => {
          props.onRemove(props.value);
        }}
      >
        <JIcon size="sm"><RemoveIcon/></JIcon>
      </button>
    </div>
  )
}
