import React, {ComponentProps, forwardRef, Fragment} from 'react';
import classNames from "classnames";

import { ErrorText } from "../../02-partials/error-text/error-text";
import { Label } from "../../02-partials/label/label";
import { Listbox } from '@headlessui/react';

export interface SelectOption {
  name: string,
  value: string,
}

export interface SelectProps extends ComponentProps<'select'> {
  id: string,
  label: string,
  error?: string,
  hideLabel?: boolean,
  options: SelectOption[],
  currentOption: SelectOption,
  onOptionChange: (option: SelectOption) => void,
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <div className="relative">
      {props.label && props.id &&
          <Label htmlFor={props.id} isHidden={props.hideLabel || false}>{ props.label }</Label>
      }
      <Listbox value={props.currentOption} onChange={props.onOptionChange}>
        <Listbox.Button
          className={classNames(
            "mt-1 block w-full rounded-md outline-none py-1.5 bg-br-atom-700",
            "border-2 text-br-whiteGrey-200",
            "focus:ring-0 focus:border-br-teal-600",
            {
              "border-br-red-500 hover:border-br-red-600": props.error,
              "border-br-blueGrey-600 hover:border-br-blueGrey-500": !props.error
            }
          )}
        >{props.currentOption.name}</Listbox.Button>
        <Listbox.Options
          className={classNames(
            "absolute mt-2 block w-full rounded-md outline-none bg-br-atom-600",
            "border-2 text-br-whiteGrey-200",
            "border-br-blueGrey-600"
          )}
        >
          {props.options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(
                  "text-center py-2",
                  {
                    "bg-br-teal-600 font-semibold": selected,
                    "bg-br-atom-800 cursor-pointer": active
                  })}>{option.name}</li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      {props.error &&
          <ErrorText>{props.error}</ErrorText>
      }
    </div>
  )
});
