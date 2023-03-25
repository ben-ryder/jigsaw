import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label.js";
import {JErrorText} from "../../form-elements/error-text/error-text.js";
import {JSelect, JOption} from "../../form-elements/select/select.js";

export interface JSelectControlOption {
	value: string,
	text: string
}

export interface JSelectControlProps {
	id: string;
	label: string;
	className?: string;
	error?: string;
	hideLabel?: boolean;
	options: JSelectControlOption[]
}

export function JSelectControl(props: JSelectControlProps) {
	const className = classNames(
		"j-select-control",
		props.className
	);

	return (
		<div className={className}>
			<JLabel htmlFor={props.id} hidden={props.hideLabel}>{props.label}</JLabel>
			<JSelect
				id={props.id}
				error={!!props.error}
			>
				{props.options.map(option =>
					<JOption value={option.value}>{option.text}</JOption>
				)}
			</JSelect>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
