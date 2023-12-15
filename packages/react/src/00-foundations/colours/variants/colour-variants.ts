export const JColourVariants = {
	teal: {
		label: "Teal",
		value: "teal"
	},
	blueGrey: {
		label: "Blue Grey",
		value: "blueGrey"
	},
	white: {
		label: "White",
		value: "white"
	},
	red: {
		label: "Red",
		value: "red"
	},
	orange: {
		label: "Orange",
		value: "orange"
	},
	yellow: {
		label: "Yellow",
		value: "yellow"
	},
	green: {
		label: "Green",
		value: "green"
	},
	blue: {
		label: "Blue",
		value: "blue"
	},
	purple: {
		label: "Purple",
		value: "purple"
	},
	pink: {
		label: "Pink",
		value: "pink"
	},
}

export const JColourVariantsList = [
	JColourVariants.teal.value,
	JColourVariants.blueGrey.value,
	JColourVariants.white.value,
	JColourVariants.red.value,
	JColourVariants.orange.value,
	JColourVariants.yellow.value,
	JColourVariants.green.value,
	JColourVariants.blue.value,
	JColourVariants.purple.value,
	JColourVariants.pink.value,
] as const;

export type JColourVariants = keyof typeof JColourVariants
