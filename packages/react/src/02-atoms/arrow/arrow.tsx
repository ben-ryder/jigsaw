import { ComponentProps } from "react";
import { clsx } from "clsx";
import {
	ArrowRight as RightArrowIcon,
	ArrowLeft as LeftArrowIcon,
} from "lucide-react";
import {Slot, Slottable} from "@radix-ui/react-slot";

export type JArrowVariant = "normal" | "minimal"
export type JArrowDirection = "left" | "right"

export interface JArrowProps extends ComponentProps<"a"> {
	direction?: JArrowDirection;
	variant?: JArrowVariant;
	asChild?: boolean;
}

export function JArrow(props: JArrowProps) {
	const {
		direction = "right",
		variant = "normal",
		asChild = false,
		children,
		className: suppliedClassName,
		...htmlProps
	} = props;

	const Component = asChild ? Slot : "a"

	const className = clsx(
		"j-arrow",
		{
			"j-arrow --left": props.direction === "left",
			"j-arrow --minimal": props.variant === "minimal"
		},
		suppliedClassName
	);

	return (
		<Component className={className} {...htmlProps}>
			<LeftArrowIcon className="j-icon j-arrow__icon-left" />
			<Slottable>{children}</Slottable>
			<RightArrowIcon className="j-icon j-arrow__icon-right" />
		</Component>
	);
}
