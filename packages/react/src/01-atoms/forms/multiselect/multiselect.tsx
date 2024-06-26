import { JLabel } from "../label/label.js";
import { JErrorText } from "../error-text/error-text.js";
import { ForwardedRef, forwardRef, useEffect, useMemo, useState } from "react";
import {JColourVariants} from "../../../00-foundations/colours/variants/colour-variants.js";
import {JOptionData} from "../select/select.js";
import classNames from "classnames";
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions,
  useMultipleSelection
} from "downshift";
import {JPillTag} from "../../pills/tag/pill-tag.js";
import {JIcon} from "../../icons/icon.js";
import {ChevronsDown as MultiSelectOpenIcon} from "lucide-react";
import { offset, useFloating } from "@floating-ui/react";
import { JPill } from "../../pills/pill/pill.js";
import { JTooltipProps } from "../../../02-components/tooltip/tooltip.js";

export interface JMultiSelectOptionData extends JOptionData {
  variant?: JColourVariants;
}

export type JMultiSelectVariant = 'normal' | 'minimal';

export interface JMultiSelectProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  hideLabel?: boolean;
  searchText?: string;
  noOptionsText?: string;
  options: JMultiSelectOptionData[];
  selectedOptions: JMultiSelectOptionData[];
  setSelectedOptions: (options: JMultiSelectOptionData[]) => void;
  variant?: JMultiSelectVariant;
  tooltip?: JTooltipProps;
}

/**
 * A helper function to filter the multiselect options based on a text search.
 *
 * @param options
 * @param selectedOptions
 * @param search
 */
export function getFilteredOptions(
  options: JMultiSelectOptionData[],
  selectedOptions: JMultiSelectOptionData[],
  search: string
) {
  const searchValue = search.toLowerCase();

  const filteredOptions: JMultiSelectOptionData[] = []

  option_search:
  for (const potentialOption of options) {
    for (const selectedOption of selectedOptions) {
      if (potentialOption.value === selectedOption.value) {
        continue option_search
      }
    }

    if (potentialOption.text.toLowerCase().includes(searchValue)) {
      filteredOptions.push(potentialOption)
    }
  }

  return filteredOptions
}

/**
 * This component uses Downshift and is based off the example
 * found here: https://github.com/downshift-js/downshift-examples/blob/master/src/hooks/useMultipleSelection/combobox.js
 */
// @ts-ignore - ref not used, todo: does this component actually need to forward ref at all?
export const JMultiSelect = forwardRef((props: JMultiSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const [inputValue, setInputValue] = useState<string>("");
  const options = useMemo(
    () => getFilteredOptions(props.options, props.selectedOptions, inputValue),
    [props.options, props.selectedOptions, inputValue]
  );

  const className = classNames("j-multiselect", {
    "j-multiselect--error": props.error,
    "j-multiselect--minimal": props.variant === 'minimal',
    "j-multiselect--required": props.required,
    "j-multiselect--disabled": props.disabled
  });

  const { getDropdownProps, removeSelectedItem } =
    useMultipleSelection<JMultiSelectOptionData>({
      selectedItems: props.selectedOptions,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            // @ts-ignore
            props.setSelectedOptions(newSelectedItems);
            break;
          default:
            break;
        }
      },
    });

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox<JMultiSelectOptionData>({
    inputId: props.id,
    itemToString(item): string {
      return item ? item.text : "";
    },
    items: options,
    stateReducer(
      // @ts-ignore - state not used, keeping from reference example for clarity
      state: UseComboboxState<JMultiSelectOptionData>,
      actionAndChanges: UseComboboxStateChangeOptions<JMultiSelectOptionData>
    ): Partial<UseComboboxState<JMultiSelectOptionData>> {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
            highlightedIndex: 0,
            inputValue: "", // with the first option highlighted.
          };
        default:
          return changes;
      }
    },
    onStateChange(
      changes: UseComboboxStateChange<JMultiSelectOptionData>
    ): void {
      switch (changes.type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (changes.selectedItem) {
            props.setSelectedOptions([
              ...props.selectedOptions,
              changes.selectedItem,
            ]);
            // Reset search input so the user can start searching again correctly
            // and all options will be visible again in the dropdown menu.
            setInputValue("")
          }
          break;
        case useCombobox.stateChangeTypes.InputChange:
          // @ts-ignore
          setInputValue(changes.inputValue);
          break;
        default:
          break;
      }
    },
  });

  const {
    refs: floatingMenuRefs,
    floatingStyles: floatingMenuStyles,
    update: floatingMenuUpdate,
  } = useFloating({
    placement: "bottom-start",
    middleware: [offset(12)]
  });


  const {ref: downshiftMenuRef, ...downshiftMenuProps } = getMenuProps({ref: floatingMenuRefs.setFloating, disabled: props.disabled});
  const {ref: downshiftInputRef, ...downshiftInputProps} = getInputProps(getDropdownProps({ preventKeyAction: isOpen, ref: floatingMenuRefs.setReference, disabled: props.disabled }))

  // Update the floating menu position when the menu opens & when the selected
  // options change, as that will cause the input element to shift.
  useEffect(() => {
    floatingMenuUpdate()
  }, [props.selectedOptions, isOpen])

  return (
    <div className={className}>
      <JLabel htmlFor={props.id} hidden={props.hideLabel} tooltip={props.tooltip}>
        {props.label}
      </JLabel>
      <div className="j-multiselect__element">
        <div className="j-multiselect__inner">
          {props.selectedOptions.map((selectedItem, index) => (
            <>
              {!props.disabled
                ? (
                  <JPillTag
                    data={selectedItem}
                    key={`selected-item-${index}`}
                    onRemove={() => {
                      removeSelectedItem(selectedItem);
                    }}
                    variant={selectedItem.variant}
                  />
                )
                : (
                  <JPill
                    key={`selected-item-${index}`}
                    variant={selectedItem.variant}
                  >{selectedItem.text}</JPill>
                )
              }
            </>
          ))}
          <input
            {...downshiftInputProps}
            className="j-multiselect__input"
            placeholder={props.searchText || "Search options..."}
            ref={downshiftInputRef}
          />
        </div>
        <button
          {...getToggleButtonProps({disabled: props.disabled})}
          aria-label={"toggle menu"}
          className="j-multiselect__toggle"
        >
          <JIcon>
            <MultiSelectOpenIcon />
          </JIcon>
        </button>

        <ul
          className={classNames('j-multiselect__menu', {'j-multiselect__menu--open': isOpen })}
          {...downshiftMenuProps}
          ref={downshiftMenuRef}
          style={floatingMenuStyles}
        >
          {options.map((item, index) => (
            <li
              className={classNames(
                "j-multiselect__menu-item",
                item.variant ? `j-multiselect__menu-item--${item.variant}` : "",
                {
                  "j-multiselect__menu-item--highlighted":
                    highlightedIndex === index,
                }
              )}
              {...getItemProps({ item, index, disabled: props.disabled })}
              key={`${item}${index}`}
            >
              {item.text}
            </li>
          ))}
          {options.length === 0 && (
            <li className="j-multiselect__menu-empty-item">
              {props.noOptionsText || "No options available"}
            </li>
          )}
        </ul>
      </div>
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
})
