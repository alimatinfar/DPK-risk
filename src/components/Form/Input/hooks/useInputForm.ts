import {useEffect} from "react";
import {useController, useFormContext} from "react-hook-form";
import type {InputFormPropsType} from "../InputForm.tsx";

function useInputForm(
  {
    defaultValue, fieldName, rules, onChangeFromParent
  }: Pick<InputFormPropsType,
    'defaultValue' | 'fieldName' | 'rules' | 'onChangeFromParent'
  >
) {

  const {control, trigger, formState: {isSubmitted}} = useFormContext()

  const {
    field: {onChange, onBlur, name, value, ref},
  } = useController({
    name: fieldName,
    control,
    rules,
    defaultValue: defaultValue ?? "",
  });

  useEffect(() => {
    if (rules?.validate && isSubmitted) trigger(fieldName).then()
  }, [value]);

  function onChangeHandler(value: any) {
    onChangeFromParent && onChangeFromParent(value)
    onChange(value)
  }

  return {
    name,
    inputRef:ref,
    onChange: onChangeHandler,
    onBlur,
    value,
    required:Boolean(rules?.required),
  }
}

export default useInputForm
