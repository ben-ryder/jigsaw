import {useState, useMemo} from "react";
import {
	useCombobox,
	UseComboboxState,
	UseComboboxStateChange,
	UseComboboxStateChangeOptions,
	useMultipleSelection
} from "downshift";
import {JOptionData} from "../select/select.js";
import {JIcon} from "../../icons/icon.js";
import {ChevronsDown as MultiSelectOpenIcon} from "lucide-react";
import classNames from "classnames";
import {JTag} from "../../../02-components/tag/tag.js";

export interface JMultiSelectOptionProps {
	options: JOptionData[],
	selectedOptions: JOptionData[],
	setSelectedOptions: (options: JOptionData[]) => void
}

export interface JMultiSelectProps extends JMultiSelectOptionProps {
	error?: boolean,
	id: string
}

/**
 * A helper function to filter the multi select options based on a text search.
 *
 * @param options
 * @param selectedOptions
 * @param search
 */
export function getFilteredOptions(
	options: JOptionData[],
	selectedOptions: JOptionData[],
	search: string
) {
	const searchValue = search.toLowerCase();

	return options.filter(option => {
		return !selectedOptions.includes(option) &&
			option.text.toLowerCase().includes(searchValue);
	})
}

/**
 * This component uses Downshift and is based off the example
 * found here: https://github.com/downshift-js/downshift-examples/blob/master/src/hooks/useMultipleSelection/combobox.js
 */
export function JMultiSelect(props: JMultiSelectProps) {
	const [inputValue, setInputValue] = useState<string>("");
	const options = useMemo(
		() => getFilteredOptions(props.options, props.selectedOptions, inputValue),
		[props.selectedOptions, inputValue],
	);

	const className = classNames(
		"j-multiselect",
		{
			"j-multiselect--error": props.error
		}
	);


	const {
		getSelectedItemProps,
		getDropdownProps,
		removeSelectedItem,
	} = useMultipleSelection<JOptionData>({
		selectedItems: props.selectedOptions,
		onStateChange({selectedItems: newSelectedItems, type}) {
			switch (type) {
				case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
				case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
				case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
				case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
					// @ts-ignore
					props.setSelectedOptions(newSelectedItems);
					break;
				default:
					break
			}
		},
	});

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox<JOptionData>({
		inputId: props.id,
		itemToString(item): string {
			return item ? item.text : "";
		},
		items: options,
		stateReducer(state: UseComboboxState<JOptionData>, actionAndChanges: UseComboboxStateChangeOptions<JOptionData>): Partial<UseComboboxState<JOptionData>> {
			const {changes, type} = actionAndChanges;

			switch (type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
					return {
						...changes,
						isOpen: true, // keep the menu open after selection.
						highlightedIndex: 0,
						inputValue: "" // with the first option highlighted.
					}
					// return {
					// 	...changes,
					// 	...(changes.selectedItem && {isOpen: true, highlightedIndex: 0}),
					// }
				default:
					return changes
			}
		},
		onStateChange(changes: UseComboboxStateChange<JOptionData>): void {
			switch (changes.type) {
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (changes.selectedItem) {
						props.setSelectedOptions([...props.selectedOptions, changes.selectedItem])
					}
					break;
				case useCombobox.stateChangeTypes.InputChange:
					// @ts-ignore
					setInputValue(changes.inputValue)
					break;
				default:
					break;
			}
		}
	});

	return (
		<div className={className}>
			<div className="j-multiselect__inner">
				{props.selectedOptions.map((selectedItem, index) => (
					<JTag
						data={selectedItem}
						key={`selected-item-${index}`}
						onRemove={(item) => {
							removeSelectedItem(selectedItem)
						}}
					/>
				))}
				<input
					{...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
					className="j-multiselect__input"
					placeholder="Search options..."
				/>
			</div>
			<button
				{...getToggleButtonProps()}
				aria-label={'toggle menu'}
				className="j-multiselect__toggle"
			>
				<JIcon><MultiSelectOpenIcon /></JIcon>
			</button>

			{isOpen &&
				<ul className="j-multiselect__menu" {...getMenuProps()}>
					{options.map((item, index) => (
						<li
							className={classNames(
								"j-multiselect__menu-item",
								{
									"j-multiselect__menu-item--highlighted": highlightedIndex === index
								}
							)}
							{...getItemProps({item, index})}
							key={`${item}${index}`}
						>
							{item.text}
						</li>
					))}
					{options.length === 0 &&
						<li className="j-multiselect__menu-empty-item">No items available</li>
					}
				</ul>
			}
		</div>
	)
}