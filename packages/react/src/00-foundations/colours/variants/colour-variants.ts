export const JColourVariantLabels = {
	teal: "Teal",
	blueGrey: "Blue Grey",
	white: "White",
	red: "Red",
	orange: "Orange",
	yellow: "Yellow",
	green: "Green",
	blue: "Blue",
	purple: "Purple",
	pink: "Pink"
} as const;

export type JColourVariants = keyof typeof JColourVariantLabels
export const JColourVariants = Object.keys(JColourVariantLabels) as unknown as JColourVariants;
