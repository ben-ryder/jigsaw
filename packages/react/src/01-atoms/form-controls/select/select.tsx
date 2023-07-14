import { JLabel } from "../../form-elements/label/label.js";
import { JErrorText } from "../../form-elements/error-text/error-text.js";
import { JOptionData, JSelect } from "../../form-elements/select/select.js";

export interface JSelectControlProps {
  id: string;
  label: string;
  error?: string;
  hideLabel?: boolean;
  options: JOptionData[];
  value?: string;
  onChange?: (value: string) => void;
}

export function JSelectControl(props: JSelectControlProps) {
  return (
    <div className="j-select-control">
      <JLabel htmlFor={props.id} hidden={props.hideLabel}>
        {props.label}
      </JLabel>
      <JSelect
        id={props.id}
        error={!!props.error}
        options={props.options}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
}
