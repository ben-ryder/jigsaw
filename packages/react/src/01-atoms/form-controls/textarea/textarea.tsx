import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label.js";
import {JTextArea} from "../../form-elements/textarea/textarea.js";
import {JErrorText} from "../../form-elements/error-text/error-text.js";
import {ComponentProps} from "react";

export interface JTextAreaControlProps extends ComponentProps<'textarea'>{
	label: string;
	error?: string;
	hideLabel?: boolean;
}

export function JTextAreaControl(props: JTextAreaControlProps) {
	const {label, error, hideLabel, ...htmlProps} = props;

	const className = classNames(
		"j-text-area-control",
		props.className
	);

	return (
		<div className={className}>
			<JLabel htmlFor={props.id} hidden={props.hideLabel}>{props.label}</JLabel>
			<JTextArea
				error={!!props.error}
				{...htmlProps}
			/>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
