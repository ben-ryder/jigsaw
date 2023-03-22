import {ComponentProps, HTMLInputTypeAttribute} from "react";
import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label";
import {JInput} from "../../form-elements/input/input";
import {JErrorText} from "../../form-elements/error-text/error-text";

export interface JInputControlProps {
	id: string;
	className?: string;
	label: string;
	error?: string;
	type: HTMLInputTypeAttribute
	hideLabel?: boolean;
	placeholder?: string;
}

export function JInputControl(props: JInputControlProps) {
	const className = classNames(
		"j-input-control",
		props.className
	);

	return (
		<div className={className}>
			<JLabel htmlFor={props.id} hidden={props.hideLabel}>{props.label}</JLabel>
			<JInput id={props.id} type={props.type} error={!!props.error} placeholder={props.placeholder}></JInput>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
