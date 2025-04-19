import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface JButtonProps extends ComponentProps<'button'> {
	variant?: "primary" | "secondary" | "destructive";
	asChild?: boolean;
}

export function JButton({
	variant = "primary",
	asChild = false,
	className: customClassName,
	disabled,
	...htmlProps
}: JButtonProps) {
	const Component = asChild ? Slot : "button"

	const className = clsx(
		"button",
		variant !== "primary" && `--${variant}`,
		customClassName,
	)

	return (
		<Component
			className={className}
			disabled={disabled}
			{...htmlProps}
		/>
	)
}
