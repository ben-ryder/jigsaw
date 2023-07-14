import { JLabel } from "../../form-elements/label/label.js";
import { JErrorText } from "../../form-elements/error-text/error-text.js";
import {
  JMultiSelect,
  JMultiSelectOptionProps,
} from "../../form-elements/multiselect/multiselect.js";

export interface JMultiSelectControlProps extends JMultiSelectOptionProps {
  id: string;
  label: string;
  error?: string;
  hideLabel?: boolean;
}

export function JMultiSelectControl(props: JMultiSelectControlProps) {
  return (
    <div className="j-multiselect-control">
      <JLabel htmlFor={props.id} hidden={props.hideLabel}>
        {props.label}
      </JLabel>
      <JMultiSelect
        id={props.id}
        error={!!props.error}
        options={props.options}
        selectedOptions={props.selectedOptions}
        setSelectedOptions={props.setSelectedOptions}
      />
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
}
