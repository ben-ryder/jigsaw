import {ComponentProps} from "react";
import classNames from "classnames";

export interface JFormProps extends ComponentProps<'form'> {}

export function JForm(props: JFormProps) {
	const {className: suppliedClassName} = props;
	const className = classNames("j-form", suppliedClassName);

	return (
		<form className={className} {...props} />
	)
}

export interface JFormRowProps extends ComponentProps<'div'> {}

export function JFormRow(props: JFormRowProps) {
	const {className: suppliedClassName} = props;
	const className = classNames("j-form__row", suppliedClassName);

	return (
		<div className={className} {...props} />
	)
}

export interface JFormContentProps extends ComponentProps<'div'> {}

export function JFormContent(props: JFormContentProps) {
	const {className: suppliedClassName} = props;
	const className = classNames("j-form__content", suppliedClassName);

	return (
		<div className={className} {...props} />
	)
}

export interface JFormHeaderProps extends ComponentProps<'div'> {}

export function JFormHeader(props: JFormHeaderProps) {
	const {className: suppliedClassName} = props;
	const className = classNames("j-form__header", suppliedClassName);

	return (
		<div className={className} {...props} />
	)
}
