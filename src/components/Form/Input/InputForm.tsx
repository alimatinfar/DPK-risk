import type {FormInputProps} from "./types/FormInputProps.ts";
import Input from "./Input";
import useInputForm from "./hooks/useInputForm.ts";

export type InputFormPropsType = {
  defaultValue?: any;
} & FormInputProps

function InputForm({inputProps, rules, fieldName, defaultValue}: InputFormPropsType) {

  const inputFormProps = useInputForm(
    {defaultValue, fieldName, rules}
  )

  return (
    <Input
      {...inputFormProps}
      {...inputProps}
    />
  );
}

export default InputForm;