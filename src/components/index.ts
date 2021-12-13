export { default as Button } from "./Button";
export { default as FormControl } from "./FormControl";
export { default as Select } from "./Select";
export { default as Modal } from "./Modal";
export { default as Tooltip } from "./Tooltip";
export { default as Title } from "./Title";

export const sizes = ["lg", "sm", "xs"] as const;
export type sizeType = typeof sizes[number];
