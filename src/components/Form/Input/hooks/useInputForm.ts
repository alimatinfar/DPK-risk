import {useEffect} from "react";
import {useController, useFormContext} from "react-hook-form";
import type {InputFormPropsType} from "../InputForm.tsx";

function useInputForm(
  {defaultValue, fieldName, rules}: Pick<InputFormPropsType, 'defaultValue' | 'fieldName' | 'rules'>
) {

  const {control, trigger, formState: {isSubmitted}} = useFormContext()

  const {
    field: {onChange, onBlur, name, value, ref},
  } = useController({
    name: fieldName,
    control,
    rules,
    defaultValue: defaultValue || "",
  });

  useEffect(() => {
    if (rules?.validate && isSubmitted) trigger(fieldName).then()
  }, [value]);

  return {
    name,
    inputRef:ref,
    onChange,
    onBlur,
    value,
    required:Boolean(rules?.required),
  }
}

export default useInputForm