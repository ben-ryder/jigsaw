import {useState, useMemo} from "react";
import {
	useCombobox,
	UseComboboxState,
	UseComboboxStateChange,
	UseComboboxStateChangeOptions,
	useMultipleSelection
} from "downshift";
import {JOptionData} from "../../form-elements/select/select.js";
import {JLabel} from "../../form-elements/label/label.js";
import {JIcon} from "../../icons/icon.js";
import {XIcon as RemoveTagIcon, ChevronsDown as MultiSelectOpenIcon} from "lucide-react";
import classNames from "classnames";

export interface JMultiSelectProps {
	// Control Props
	label: string,
	hideLabel?: boolean,
	error?: string,
	// Element Props
	id: string,
	options: JOptionData[],
	selectedOptions: JOptionData[],
	setSelectedOptions: (options: JOptionData[]) => void
}

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

	const elementClassName = classNames(
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
		<div className="j-multiselect-control">
			<JLabel hidden={props.hideLabel} {...getLabelProps()}>{props.label}</JLabel>
			<div className={elementClassName}>
				{props.selectedOptions.map((selectedItem, index) => (
					<span
						{...getSelectedItemProps({selectedItem, index})}
						className="j-multiselect__tag"
						key={`selected-item-${index}`}
					>
            {selectedItem.text}
						<button
							className="j-multiselect__tag-remove"
							onClick={(e) => {
								e.stopPropagation()
								removeSelectedItem(selectedItem)
							}}
						>
							<JIcon size="sm"><RemoveTagIcon /></JIcon>
            </button>
          </span>
				))}
				<div className="j-multiselect__input-area">
					<input
						{...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
						className="j-multiselect__input"
					/>
					<button
						{...getToggleButtonProps()}
						aria-label={'toggle menu'}
						className="j-multiselect__toggle"
					>
						<JIcon><MultiSelectOpenIcon /></JIcon>
					</button>
				</div>
			</div>
			<ul {...getMenuProps()}>
				{isOpen &&
					options.map((item, index) => (
						<li
							style={
								highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
							}
							key={`${item}${index}`}
							{...getItemProps({item, index})}
						>
							{item.text}
						</li>
					))}
			</ul>
		</div>
	)
}