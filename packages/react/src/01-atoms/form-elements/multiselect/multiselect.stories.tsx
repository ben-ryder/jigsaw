import "./multiselect";

import {JMultiSelect} from "./multiselect";

export default {
	title: "Atoms/Form Elements/MultiSelect",
	parameters: {
		status: {
			type: "experimental"
		}
	}
};

export function Default() {
	return (
		<JMultiSelect />
	)
}

export function WithError() {
	return (
		<JMultiSelect error={true} />
	)
}
