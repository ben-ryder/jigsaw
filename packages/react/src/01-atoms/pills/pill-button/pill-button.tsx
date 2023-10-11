import {ComponentProps} from "react";
import classNames from "classnames";
import {getPillClassName, JPillProps} from "../pill/pill.js";

export interface JPillButtonProps extends JPillProps, ComponentProps<'button'> {}

export function JPillButton(props: JPillButtonProps) {
  const {
    size,
    interactive,
    variant,
    className: suppliedClassName,
    ...htmlProps
  } = props;

  const className = classNames(
    "j-pill-button",
    getPillClassName({size, variant, interactive: true}),
    suppliedClassName
  );

  return (
    <button className={className} {...htmlProps} />
  );
}
