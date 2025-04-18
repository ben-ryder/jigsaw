import {Default as ExampleForm} from "../form/form.stories"
import "./background-layers.development.scss"

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
				<ExampleForm />
			</div>
			<div className="background-layers__f1 layer-f1">
				<ExampleForm />
			</div>
			<div className="background-layers__f2 layer-f2">
				<ExampleForm />
			</div>
		</div>
	);
}
