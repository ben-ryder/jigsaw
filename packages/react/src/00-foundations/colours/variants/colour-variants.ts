export const JColourVariants = {
	teal: "teal",
	blueGrey:"blueGrey",
	white: "white",
	red: "red",
	orange: "orange",
	yellow: "yellow",
	green: "green",
	blue: "blue",
	purple: "purple",
	pink: "pink",
}

export const JColourVariantsList = [
	JColourVariants.teal,
	JColourVariants.blueGrey,
	JColourVariants.white,
	JColourVariants.red,
	JColourVariants.orange,
	JColourVariants.yellow,
	JColourVariants.green,
	JColourVariants.blue,
	JColourVariants.purple,
	JColourVariants.pink,
] as const;

export type JColourVariants = typeof JColourVariantsList[number]
