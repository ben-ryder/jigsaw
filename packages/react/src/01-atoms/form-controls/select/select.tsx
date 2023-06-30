import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label.js";
import {JErrorText} from "../../form-elements/error-text/error-text.js";
import {JOptionData, JSelect} from "../../form-elements/select/select.js";
import {ComponentProps} from "react";


export interface JSelectControlProps {
	id: string;
	label: string;
	error?: string;
	hideLabel?: boolean;
	options: JOptionData[];
}

export function JSelectControl(props: JSelectControlProps) {
	const {label, hideLabel, error, options, ...htmlProps} = props;

	return (
		<div className="j-select-control">
			<JLabel htmlFor={props.id} hidden={props.hideLabel}>{props.label}</JLabel>
			<JSelect
				id={props.id}
				error={!!props.error}
				options={options}
			/>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
