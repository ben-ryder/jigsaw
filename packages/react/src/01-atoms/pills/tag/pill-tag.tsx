import classNames from "classnames";
import { XIcon as RemoveIcon } from "lucide-react";
import { JIcon } from "../../icons/icon.js";
import {getPillClassName, JPillBaseProps} from "../pill/pill.js";

export interface JPillTagData {
  text: string;
  value: string;
}

export interface JPillTagProps extends JPillBaseProps {
  data: JPillTagData;
  onRemove: (data: JPillTagData) => void;
  getA11yRemoveText?: (text: string) => string;
}

export function JPillTag(props: JPillTagProps) {
  const className = classNames(
    "j-tag",
    getPillClassName({size: props.size, variant: props.variant, interactive: false})
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
        type="button"
      >
        <JIcon size="sm">
          <RemoveIcon />
        </JIcon>
      </button>
    </div>
  );
}
