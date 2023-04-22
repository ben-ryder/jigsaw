import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";

export interface JTextLinkProps extends ComponentProps<'a'> {}

export function JTextLink(props: JTextLinkProps) {
	const {className: suppliedClassName, children, ...htmlProps} = props;

	const className = classNames(
		"j-text-link",
		suppliedClassName
	);

	return (
		<a className={className} {...htmlProps}>{children}</a>
	)
}
