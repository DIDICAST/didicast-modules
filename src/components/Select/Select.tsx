import { Property } from "csstype";
import { useMemo } from "react";
import SelectComponent, {
  ActionMeta,
  GroupBase,
  OptionsOrGroups,
  PropsValue,
  SingleValue,
  StylesConfig,
} from "react-select";

export type SelectProps = {
  width?:
    | (string | (string & {}))[]
    | Property.Width<string | number>
    | (Property.Width<string | number> | undefined)[];
  margin?:
    | (string | (string & {}))[]
    | Property.Margin<string | number>
    | (Property.Margin<string | number> | undefined)[];
  value?: PropsValue<object>;
  options?: OptionsOrGroups<object, GroupBase<object>>;
  onChange?: (
    newValue: SingleValue<object>,
    actionMeta: ActionMeta<object>
  ) => void;
};

const Select = ({
  value,
  options,
  width = "160px",
  margin = "0 5px",
  onChange,
  ...props
}: SelectProps) => {
  const selectStyles = useMemo<StylesConfig<object, false, GroupBase<object>>>(
    () => ({
      container: () => ({
        margin: margin,
      }),
      control: (provided: any, { isFocused }: any) => ({
        ...provided,
        width: width,
        height: 48,
        paddingLeft: 10,
        borderColor: isFocused ? "var(--didicast-blue)" : "#d0d0d0",
        borderRadius: 4,
        boxShadow: `none`,
        fontSize: 16,
        ":hover": {
          outline: "none",
          borderColor: "var(--didicast-blue)",
          boxShadow: `0 2px 4px 2px rgba(0, 0, 0, 0.05)`,
        },
      }),
      option: (
        provided: any,
        { data, isDisabled, isFocused, isSelected }: any
      ) => ({
        ...provided,
        width: width,
        color: "var(--didicast-gray-3)",
        backgroundColor: isSelected
          ? "var(--didicast-blue-9)"
          : isFocused
          ? " rgba(6, 176, 215, 0.05)"
          : null,
        ":active": {
          ...provided[":active"],
          backgroundColor: "var(--didicast-blue-9)",
        },
      }),
      menu: () => ({
        width: width,
        borderRadius: "4px",
        boxShadow: " 0 2px 4px 2px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }),
      indicatorSeparator: () => ({ display: "none" }),
      singleValue: (provided: any) => ({
        ...provided,
        color: "var(--didicast-gray-3)",
      }),
    }),
    [margin, width]
  );

  return (
    <SelectComponent
      styles={selectStyles}
      isSearchable={false}
      value={value}
      options={options}
      onChange={onChange}
      {...props}
    />
  );
};

export default Select;
