import {ComponentProps} from "react";
import {clsx} from "clsx";

export interface JProseProps extends ComponentProps<'div'> {
	/** A string of raw HTML. */
	html?: string
}

/**
 * Display WYSIWYG content via React children or a raw HTML string.
 */
export function JProse({
	className,
	html,
	...htmlProps
}: JProseProps) {
	return (
		<div
			className={clsx("prose", className)}
			{...htmlProps}
			/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml -- We want to  */
			dangerouslySetInnerHTML={html ? {__html: html } : undefined}
		/>
	)
}
