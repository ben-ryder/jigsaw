import {ComponentProps} from "react";
import {clsx} from "clsx";

export interface TypographyProps extends ComponentProps<'div'> {
	htmlString?: string
}

export function Typography({
	className,
	htmlString,
	...htmlProps
}: TypographyProps) {
	return (
		<div
			className={clsx("prose", className)}
			{...htmlProps}
			dangerouslySetInnerHTML={htmlString ? {__html: htmlString } : undefined}
		/>
	)
}
