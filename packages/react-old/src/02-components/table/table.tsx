import { ComponentProps } from "react";
import classNames from "classnames";

export interface JTableProps extends ComponentProps<"table"> {}

export function JTable(props: JTableProps) {
  const { className: suppliedClassName, children, ...htmlProps } = props;

  const className = classNames("j-table", suppliedClassName);

  return (
    <table className={className} {...htmlProps}>
      {children}
    </table>
  );
}
