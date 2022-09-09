import React, {ComponentProps, forwardRef, Fragment, useState} from 'react';
import classNames from "classnames";
import { Combobox } from '@headlessui/react';
import {ChevronDown as ClosedIcon, ChevronUp as OpenedIcon, X as XIcon} from "lucide-react";

import { ErrorText } from "../../02-partials/error-text/error-text";
import { Label } from "../../02-partials/label/label";
import {iconColorClassNames, iconSizes} from "../../01-base/icons/icon-defaults";
import {Tag} from "../tag/tag";
import {IconButton} from "../icon-button/icon-button";
import {SelectOption} from "../../02-partials/select/select-option";
import {SelectContainer} from "../../02-partials/select/select-container";
import {getOptionLookup, Option} from "../../02-partials/select/option-helpers";


export interface MultiSelectProps extends ComponentProps<'select'> {
  id: string,
  label: string,
  error?: string,
  hideLabel?: boolean,
  placeholder: string,
  options: Option[],
  currentOptions: string[],
  onOptionsChange: (options: string[]) => void,
}

export const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>((props, ref) => {
  const [query, setQuery] = useState<string>("");
  const optionLookup = getOptionLookup(props.options, props.currentOptions);

  const filteredOptions = props.options
    .filter((option) => {
       if (!option.name.toLowerCase().includes(query.toLowerCase())) {
         return false;
       }

       for (const currentOption of props.currentOptions) {
         if (currentOption === option.value) {
           return false;
         }
       }

       return true;
    })

  return (
    <div className="relative">
      <Combobox value={props.currentOptions} onChange={props.onOptionsChange} multiple={true}>
        {({ open }) => (
          <>
            <Combobox.Label as={Fragment}>
              <Label isHidden={props.hideLabel || false}>{ props.label }</Label>
            </Combobox.Label>
            <>
              <div
                className={classNames(
                  "relative mt-1 block w-full rounded-md outline-none p-1.5 bg-br-atom-700",
                  "border-2 text-br-whiteGrey-200",
                  "focus-within:ring-0 focus-within:border-br-teal-600",
                  {
                    "border-br-red-500 hover:border-br-red-600": props.error,
                    "border-br-blueGrey-600 hover:border-br-blueGrey-500": !props.error
                  }
                )}
              >
                <div className="flex items-center flex-wrap gap-1.5">
                  {props.currentOptions.map(option => (
                    <Tag
                      key={option}
                      text={optionLookup[option].name}
                      rightContent={
                        <IconButton
                          label={`Unselect ${optionLookup[option]}`}
                          icon={
                            <XIcon size={iconSizes.small} strokeWidth={3} />
                          }
                          className={iconColorClassNames.secondary}
                          onClick={(event) => {
                            event.stopPropagation()
                            event.preventDefault()
                            props.onOptionsChange(props.currentOptions.filter((filterOption) => filterOption !== option))
                          }}
                        />
                      }
                    />
                  ))}
                  <Combobox.Input
                    type="text"
                    onChange={(event) => {setQuery(event.target.value)}}
                    placeholder={props.placeholder}
                    className="p-0 bg-transparent border-none outline-none focus:ring-0"
                  />
                </div>
                <Combobox.Button className="absolute top-0 right-0 mr-1 h-full">
                  {open
                    ? <OpenedIcon size={iconSizes.medium} strokeWidth={1} />
                    : <ClosedIcon size={iconSizes.medium} strokeWidth={1} />
                  }
                </Combobox.Button>
              </div>
              <Combobox.Options
                as={Fragment}
              >
                <SelectContainer>
                  {filteredOptions.map((option) => (
                    <Combobox.Option
                      key={option.value}
                      value={option.value}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <SelectOption active={active} selected={selected}>{option.name}</SelectOption>
                      )}
                    </Combobox.Option>
                  ))}
                  {filteredOptions.length === 0 &&
                      <SelectOption active={false} selected={false}>No Options Found</SelectOption>
                  }
                </SelectContainer>
              </Combobox.Options>
            </>
          </>
        )}
      </Combobox>
      {props.error &&
          <ErrorText>{props.error}</ErrorText>
      }
    </div>
  )
});
