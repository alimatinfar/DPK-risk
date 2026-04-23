import {useController, useFormContext} from "react-hook-form";
import Select from "./Select";
import type {SelectProps} from "./select-exports";
import type {FormInputProps} from "../Input/types/FormInputProps.ts";

type Props = {
  selectProps?: Partial<SelectProps>;
  keyname?: string;
} & FormInputProps;

function SelectForm(
  {inputProps, rules, fieldName, selectProps = {}}: Props
) {
  const {control} = useFormContext();

  const {
    field: {onChange, onBlur, name, value, ref},
  } = useController({
    name: fieldName,
    control,
    rules,
    defaultValue: "",
  });

  return (
    <Select
      name={name}
      onSelect={onChange}
      value={value}
      inputProps={{
        inputRef: ref,
        onBlur,
        placeholder: "انتخاب کنید",
        required: Boolean(rules?.required),
        ...inputProps,
      }}
      {...selectProps}
    />
  );
}

export default SelectForm;
