import classNames from "classnames";
import {JLabel} from "../../form-elements/label/label.js";
import {JTextArea} from "../../form-elements/textarea/textarea.js";
import {JErrorText} from "../../form-elements/error-text/error-text.js";

export interface JTextAreaControlProps {
	id: string;
	label: string;
	className?: string;
	error?: string;
	hideLabel?: boolean;
	placeholder?: string;
	rows?: number;
}

export function JTextAreaControl(props: JTextAreaControlProps) {
	const className = classNames(
		"j-text-area-control",
		props.className
	);

	return (
		<div className={className}>
			<JLabel htmlFor={props.id} hidden={props.hideLabel}>{props.label}</JLabel>
			<JTextArea
				id={props.id}
				error={!!props.error}
				placeholder={props.placeholder}
				rows={props.rows || 3}
			/>
			{props.error &&
				<JErrorText>{props.error}</JErrorText>
			}
		</div>
	)
}
