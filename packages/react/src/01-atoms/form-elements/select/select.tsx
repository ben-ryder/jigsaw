import classNames from "classnames";

export interface JOptionData {
	text: string,
	value: string
}

export interface JSelectProps {
	id: string,
	options: JOptionData[]
	error?: boolean,
	value?: string,
	onChange?: (value: string) => void
}

export function JSelect(props: JSelectProps) {
	const className = classNames(
		"j-select",
		{
			"j-select--error": props.error
		}
	);

	return (
		<select
			id={props.id}
			className={className}
			value={props.value}
			onChange={(e) => {
				if (props.onChange) {
					props.onChange(e.target.value);
				}
 			}}
		>
			{props.options.map(option =>
				<option className="j-select__option" value={option.value}>{option.text}</option>
			)}
		</select>
	)
}
