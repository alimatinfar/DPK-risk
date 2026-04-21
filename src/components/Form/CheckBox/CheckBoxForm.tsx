import {useController, useFormContext} from "react-hook-form";
import CheckBox, {type CheckBoxProps} from "./CheckBox";
import type {FormInputProps} from "../Input/types/FormInputProps.ts";

export type CheckBoxFormProps = {
  defaultValue?: boolean;
  rules?: FormInputProps['rules'];
  fieldName: FormInputProps['fieldName'];
  inputProps?: Partial<CheckBoxProps>
}

function CheckBoxForm({inputProps, rules, fieldName, defaultValue}: CheckBoxFormProps) {

  const {control} = useFormContext()

  const {
    field: {onChange, name, value},
  } = useController({
    name: fieldName,
    control,
    rules,
    defaultValue: defaultValue != null ? defaultValue : false,
  });

  return (
    <CheckBox
      onChange={onChange}
      name={name}
      value={value}
      {...inputProps}
    />
  )
}

export default CheckBoxForm