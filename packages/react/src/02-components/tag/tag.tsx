import classNames from "classnames";
import { XIcon as RemoveIcon } from "lucide-react";
import { JIcon } from "../../01-atoms/icons/icon.js";
import { JColourVariants } from "../../00-foundations/colours/variants/colour-variants.js";

export interface JTagData {
  text: string;
  value: string;
}

export interface JTagProps {
  data: JTagData;
  onRemove: (data: JTagData) => void;
  variant?: JColourVariants;
  getA11yRemoveText?: (text: string) => string;
}

export function JTag(props: JTagProps) {
  const className = classNames(
    "j-tag",
    props.variant ? `j-tag--${props.variant}` : ""
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
