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
    | Property.Width<string | number>[];
  margin?:
    | (string | (string & {}))[]
    | Property.Margin<string | number>
    | Property.Margin<string | number>[];
  value?: PropsValue<object>;
  defaultValue?: PropsValue<object>;
  className?: string;
  options?: OptionsOrGroups<object, GroupBase<object>>;
  onChange?: (
    newValue: SingleValue<object>,
    actionMeta: ActionMeta<object>
  ) => void;
};

const Select = ({
  value,
  options,
  width,
  margin = "0 12px 0 0",
  onChange,
  ...props
}: SelectProps) => {
  const selectStyles = useMemo<StylesConfig<object, false, GroupBase<object>>>(
    () => ({
      container: (provided) => ({
        ...provided,
        ...(width ? { width } : {}),
        margin: margin,
      }),
      control: (provided, { isFocused }) => ({
        ...provided,
        height: 48,
        paddingLeft: 4,
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
      option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
        ...provided,
        color: "var(--didicast-gray-3)",
        backgroundColor: isSelected
          ? "var(--didicast-blue-9)"
          : isFocused
          ? "rgba(6, 176, 215, 0.05)"
          : undefined,
        ":active": {
          ...provided[":active"],
          backgroundColor: "var(--didicast-blue-9)",
        },
      }),
      // menu: (provided) => ({
      //   ...(width? {width}: {} ),
      //   ...provided,
      //   borderRadius: "4px",
      //   boxShadow: " 0 2px 4px 2px rgba(0, 0, 0, 0.1)",
      //   backgroundColor: "white",
      // }),
      menu: (provided) => {
        console.debug({ provided });
        return {
          ...provided,
          ...(width ? { width } : {}),
          borderRadius: "4px",
          boxShadow: " 0 2px 4px 2px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        };
      },
      indicatorSeparator: (provided) => ({ ...provided, display: "none" }),
      singleValue: (provided) => ({
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
      defaultValue={value}
      value={value}
      options={options}
      onChange={onChange}
      {...props}
    />
  );
};

export default Select;
