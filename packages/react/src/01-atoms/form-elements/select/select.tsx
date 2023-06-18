import {ComponentProps} from "react";
import classNames from "classnames";

export interface JOptionData {
	text: string,
	value: string
}

export interface JSelectProps extends ComponentProps<'select'> {
	options: JOptionData[]
	error?: boolean
}

export function JSelect(props: JSelectProps) {
	const {options, className: suppliedClassName, children, error, ...htmlProps} = props;

	const className = classNames(
		"j-select",
		{
			"j-select--error": error
		},
		suppliedClassName
	);

	return (
		<select
			className={className}
			{...htmlProps}
		>
			{props.options.map(option =>
				<option className="j-select__option" value={option.value}>{option.text}</option>
			)}
		</select>
	)
}
