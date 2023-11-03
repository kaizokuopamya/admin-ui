export interface dynamicInput {
  dropDownName: string;
  type: string; // Dropdown, Checkbox, Radio, Text, etc.
  description: string;
  class?: string;
  functionalities?: string;
  mandatory?: string;
  validationMessage?: string;
  typeofreq?: string;
  values?: { key: string; value: string; description: string }[];
}
