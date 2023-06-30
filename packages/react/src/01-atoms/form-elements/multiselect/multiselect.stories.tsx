import "./multiselect";

import {JMultiSelect} from "./multiselect";
import {useState} from "react";
import {JOptionData} from "../select/select";

export default {
	title: "Atoms/Form Elements/MultiSelect",
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
			id="test"
			error={true}
			options={options}
			selectedOptions={selectedOptions}
			setSelectedOptions={setSelectedOptions}
		/>
	)
}
