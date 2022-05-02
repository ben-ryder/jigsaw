import React, { ComponentProps } from 'react';
import classNames from "classnames";

import { FormError } from "../form-error/form-error";

export interface InputProps extends ComponentProps<'input'> {
  id: string,
  label: string,
  error?: string,
}

export function Input(props: InputProps) {
  return (
    <>
      {props.label && props.id &&
          <label
              className={
                classNames(
                  "font-bold text-br-whiteGrey-100",
                  {
                    "hidden": props.type === "hidden"
                  }
                )
              }
              htmlFor={props.id}
          >
            {props.label}
          </label>
      }
      <input
        {...props}
        className={classNames(
          "mt-1 block w-full rounded-md outline-none py-1.5 bg-br-atom-700",
          "border-2 text-br-whiteGrey-200",
          "focus:ring-0 focus:border-br-teal-600",
          {
            "border-br-red-500 hover:border-br-red-600": props.error,
            "border-br-blueGrey-600 hover:border-br-blueGrey-500": !props.error
          },
          props.className,
        )}
      />
      {props.error &&
          <FormError>{props.error}</FormError>
      }
    </>
  )
}
