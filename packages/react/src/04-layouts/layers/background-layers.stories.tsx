import {Default as ExampleForm} from "../form/form.stories"

export default {
	title: "Layouts/BackgroundLayers",
	parameters: {
		status: {
			type: "experimental",
		},
	},
};


export function Default() {
	return (
		<div className="background-layers">
			<div className="background-layers__background">
				<ExampleForm/>
			</div>
			<div className="background-layers__f1">
				<ExampleForm/>
			</div>
		</div>
	);
}
