import {ComponentProps, ElementType} from "react";
import classNames from "classnames";

export interface JTextLinkProps extends ComponentProps<'a'> {
	as?: ElementType<JTextLinkProps>
}

export function JTextLink(props: JTextLinkProps) {
	const {className: suppliedClassName, children, as, ...htmlProps} = props;

	const Component = as || "a";

	const className = classNames(
		"j-text-link",
		suppliedClassName
	);

	return (
		<Component className={className} {...htmlProps}>{children}</Component>
	)
}
