import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import "./button.css"

export interface JCSSButtonProps extends ComponentProps<'button'> {
	variant?: "primary" | "secondary" | "tertiary" | "destructive";
	asChild?: boolean;
}

export function JCSSButton({
	variant = "primary",
	asChild = false,
	className: customClassName,
	disabled,
	...htmlProps
}: JCSSButtonProps) {
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
