import {ComponentProps} from "react";
import {clsx} from "clsx";

export interface ButtonProps extends ComponentProps<'button'> {}

export function Button({
	className,
	...htmlProps
}: ButtonProps) {
	return (
		<button className={clsx("bg-teal-500 text-mono-100 font-bold", className)}  {...htmlProps} />
	)
}
