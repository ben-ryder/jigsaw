import classNames from "classnames";
import { XIcon as RemoveIcon } from "lucide-react";
import { JIcon } from "../../icons/icon.js";
import {getPillClassName, JPillProps} from "../pill/pill.js";

export interface JTagData {
  text: string;
  value: string;
}

export interface JTagProps extends JPillProps {
  data: JTagData;
  onRemove: (data: JTagData) => void;
  getA11yRemoveText?: (text: string) => string;
}

export function JTag(props: JTagProps) {
  const className = classNames(
    "j-tag",
    getPillClassName({size: props.size, variant: props.variant, interactive: true})
  );

  return (
    <div className={className}>
      {props.data.text}
      <button
        aria-label={
          props.getA11yRemoveText
            ? props.getA11yRemoveText(props.data.text)
            : `remove ${props.data.text} tag`
        }
        className="j-tag__remove-button"
        onClick={(e) => {
          // @todo: required for use with Multiselect & Downshift, can revisit later if causing issues
          e.stopPropagation();
          props.onRemove(props.data);
        }}
      >
        <JIcon size="sm">
          <RemoveIcon />
        </JIcon>
      </button>
    </div>
  );
}
