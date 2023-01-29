export interface Option {
  name: string,
  value: string,
  backgroundColour?: string | null,
  textColour?: string | null,
}

export function getOption(options: Option[], currentOption: string) {
  for (const option of options) {
    if (option.value === currentOption) {
      return option;
    }
  }

  throw new Error("Current option not in the list of options.");
}

export function getOptionLookup(options: Option[], currentOptionValues: string[]) {
  const currentOptions: {[key: string]: Option} = {};

  for (const optionValue of currentOptionValues) {
    currentOptions[optionValue] = getOption(options, optionValue);
  }

  return currentOptions;
}
