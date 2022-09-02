import React, {ComponentProps, forwardRef, Fragment} from 'react';
import classNames from "classnames";
import { Listbox } from '@headlessui/react';

import { ChevronDown as ClosedIcon, ChevronUp as OpenedIcon } from "lucide-react";

import { ErrorText } from "../../02-partials/error-text/error-text";
import { Label } from "../../02-partials/label/label";
import { iconSizes } from "../../01-base/icons/icon-defaults";
import {DropdownOption} from "../../02-partials/dropdown/dropdown-option";
import {DropdownContainer} from "../../02-partials/dropdown/dropdown-container";

export interface SelectOption {
  name: string,
  value: string,
}

export interface SelectProps extends ComponentProps<'div'> {
  id: string,
  label: string,
  error?: string,
  hideLabel?: boolean,
  options: SelectOption[],
  currentOption: SelectOption,
  onOptionChange: (option: SelectOption) => void,
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {error, id, label, hideLabel, options, currentOption, onOptionChange, className, ...passThroughProps} = props;

  const containerClassName = classNames(
    "relative",
    className
  )

  return (
    <div className={containerClassName} {...passThroughProps}>
      <Listbox value={currentOption} onChange={onOptionChange}>
        {({ open }) => (
          <>
            <Listbox.Label as={Fragment}>
              <Label isHidden={hideLabel || false}>{ label }</Label>
            </Listbox.Label>
            <>
              <Listbox.Button
                className={classNames(
                  "relative mt-1 block w-full rounded-md outline-none p-1.5 bg-br-atom-700",
                  "border-2 text-br-whiteGrey-200",
                  "focus:ring-0 focus:border-br-teal-600",
                  {
                    "border-br-red-500 hover:border-br-red-600": error,
                    "border-br-blueGrey-600 hover:border-br-blueGrey-500": !error
                  }
                )}
              >
                {currentOption.name}
                {open
                  ? <OpenedIcon size={iconSizes.medium} strokeWidth={1} className="absolute top-0 right-0 mr-1 h-full"/>
                  : <ClosedIcon size={iconSizes.medium} strokeWidth={1} className="absolute top-0 right-0 mr-1 h-full"/>
                }
              </Listbox.Button>
              <Listbox.Options
                as={Fragment}
              >
                <DropdownContainer>
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      value={option}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <DropdownOption active={active} selected={selected}>{option.name}</DropdownOption>
                      )}
                    </Listbox.Option>
                  ))}
                </DropdownContainer>
              </Listbox.Options>
            </>
          </>
        )}
      </Listbox>
      {error &&
          <ErrorText>{error}</ErrorText>
      }
    </div>
  )
});
