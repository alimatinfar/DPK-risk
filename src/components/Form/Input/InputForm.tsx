import type {FormInputProps} from "./types/FormInputProps.ts";
import Input from "./Input";
import useInputForm from "./hooks/useInputForm.ts";
import type {InputProps} from "./types/InputProps.ts";

export type InputFormPropsType = {
  defaultValue?: any;
  onChangeFromParent?: InputProps['onChange'];
} & FormInputProps

function InputForm(
  {
    inputProps, rules, fieldName, defaultValue, onChangeFromParent
  }: InputFormPropsType
) {

  const inputFormProps = useInputForm(
    {defaultValue, fieldName, rules, onChangeFromParent}
  )

  return (
    <Input
      {...inputFormProps}
      {...inputProps}
    />
  );
}

export default InputForm;
