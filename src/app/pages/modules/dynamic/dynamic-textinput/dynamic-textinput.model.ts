export interface dynamicInput {
  dropDownName: string;
  type: string; // Dropdown, Checkbox, Radio, etc.
  description: string;
  values: { key: string; value: string; description: string }[];
}
