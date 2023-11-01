import { JLabel } from "../label/label.js";
import { JErrorText } from "../error-text/error-text.js";
import {ForwardedRef, forwardRef, useMemo, useState} from "react";
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

export interface JMultiSelectOptionData extends JOptionData {
  variant?: JColourVariants;
}

export interface JMultiSelectProps {
  id: string;
  label: string;
  error?: string;
  hideLabel?: boolean;
  searchText?: string;
  noOptionsText?: string;
  options: JMultiSelectOptionData[];
  selectedOptions: JMultiSelectOptionData[];
  setSelectedOptions: (options: JMultiSelectOptionData[]) => void;
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

  return options.filter((option) => {
    return (
      !selectedOptions.includes(option) &&
      option.text.toLowerCase().includes(searchValue)
    );
  });
}

/**
 * This component uses Downshift and is based off the example
 * found here: https://github.com/downshift-js/downshift-examples/blob/master/src/hooks/useMultipleSelection/combobox.js
 */
export const JMultiSelect = forwardRef((props: JMultiSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const [inputValue, setInputValue] = useState<string>("");
  const options = useMemo(
    () => getFilteredOptions(props.options, props.selectedOptions, inputValue),
    [props.selectedOptions, inputValue]
  );

  const className = classNames("j-multiselect", {
    "j-multiselect--error": props.error,
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

  return (
    <div className={className}>
      <JLabel htmlFor={props.id} hidden={props.hideLabel}>
        {props.label}
      </JLabel>
      <div className="j-multiselect__element">
        <div className="j-multiselect__inner">
          {props.selectedOptions.map((selectedItem, index) => (
            <JPillTag
              data={selectedItem}
              key={`selected-item-${index}`}
              onRemove={(item) => {
                removeSelectedItem(selectedItem);
              }}
              variant={selectedItem.variant}
            />
          ))}
          <input
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            className="j-multiselect__input"
            placeholder={props.searchText || "Search options..."}
          />
        </div>
        <button
          {...getToggleButtonProps()}
          aria-label={"toggle menu"}
          className="j-multiselect__toggle"
        >
          <JIcon>
            <MultiSelectOpenIcon />
          </JIcon>
        </button>

        {isOpen && (
          <ul className="j-multiselect__menu" {...getMenuProps()}>
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
                {...getItemProps({ item, index })}
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
        )}
      </div>
      {props.error && <JErrorText>{props.error}</JErrorText>}
    </div>
  );
})
