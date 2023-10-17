export interface dynamicInput {
  dropDownName: string;
  type: string; // Dropdown, Checkbox, Radio, Text, etc.
  description: string;
  values?: { key: string; value: string; description: string }[];
}
