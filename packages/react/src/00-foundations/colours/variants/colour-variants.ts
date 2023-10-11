export const JColourVariantsList = [
	"teal",
	"blueGrey",
	"white",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"pink",
] as const;

export type JColourVariants = typeof JColourVariantsList[number]
