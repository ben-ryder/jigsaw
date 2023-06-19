import "./multiselect";

import {JMultiSelect} from "./multiselect";
import {useState} from "react";
import {JOptionData} from "../../form-elements/select/select";

export default {
	title: "Atoms/Form Controls/MultiSelect",
	parameters: {
		status: {
			type: "experimental"
		}
	}
};

const options: JOptionData[] = [
	{
		text: "Option One", value: "one"
	},
	{
		text: "Option Two", value: "two"
	},
	{
		text: "Option Three", value: "three"
	},
	{
		text: "Option Four", value: "Four"
	},
	{
		text: "Option Five", value: "Five"
	},
	{
		text: "Option Six", value: "six"
	}
]

export function Default() {
	const [selectedOptions, setSelectedOptions] = useState<JOptionData[]>([options[0], options[4]]);

	return (
		<JMultiSelect
			label="Example MultiSelect"
			id="test"
			options={options}
			selectedOptions={selectedOptions}
			setSelectedOptions={setSelectedOptions}
		/>
	)
}

export function WithError() {
	const [selectedOptions, setSelectedOptions] = useState<JOptionData[]>([options[0], options[4]]);

	return (
		<JMultiSelect
			label="Example MultiSelect"
			id="test"
			error="There's something wrong with this!"
			options={options}
			selectedOptions={selectedOptions}
			setSelectedOptions={setSelectedOptions}
		/>
	)
}
