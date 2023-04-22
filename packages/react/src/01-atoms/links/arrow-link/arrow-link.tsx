import {ComponentProps, ReactNode} from "react";
import classNames from "classnames";
import {
	ArrowRight as RightArrowIcon,
	ArrowLeft as LeftArrowIcon
} from "lucide-react";

export interface JArrowLinkProps extends ComponentProps<'a'> {
	direction?: "left" | "right"
}

export function JArrowLink(props: JArrowLinkProps) {
	const {className: suppliedClassName, direction, children, ...htmlProps} = props;


	const className = classNames(
		"j-arrow-link",
		{
			"j-arrow-link--left": props.direction === "left"
		},
		suppliedClassName
	);

	return (
		<a className={className} {...htmlProps}>
			<LeftArrowIcon className="j-icon j-arrow-link__icon-left" />
			{children}
			<RightArrowIcon className="j-icon j-arrow-link__icon-right" />
		</a>
	)
}
