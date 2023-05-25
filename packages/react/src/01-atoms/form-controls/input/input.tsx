import {ComponentProps} from "react";
import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label.js";
import {JInput, JInputProps} from "../../form-elements/input/input.js";
import {JErrorText} from "../../form-elements/error-text/error-text.js";

export interface JInputControlProps extends ComponentProps<'input'> {
	label: string;
	error?: string;
	hideLabel?: boolean;
}

export function JInputControl(props: JInputControlProps) {
	const {label, hideLabel, error, ...htmlProps} = props;

	const className = classNames(
		"j-input-control",
		props.className
	);

	return (
		<div className={className}>
			<JLabel htmlFor={props.id} hidden={hideLabel}>{label}</JLabel>
			<JInput
				error={!!props.error}
				{...htmlProps}
			/>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
