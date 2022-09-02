import { StrictReactNode } from '../../../extras/strict-react-children';
import classNames from "classnames";
import React, {forwardRef} from "react";


export interface DropdownContainerProps {
  children: StrictReactNode
}


export const DropdownContainer = forwardRef<HTMLUListElement, DropdownContainerProps>((props, ref) => {
  return (
    <ul
      ref={ref}
      className={classNames(
        "z-10 absolute mt-2 block w-full rounded-md outline-none bg-br-atom-600",
        "border-2 text-br-whiteGrey-200",
        "border-br-blueGrey-600"
      )}
      {...props}
    >{props.children}</ul>
  )
})
