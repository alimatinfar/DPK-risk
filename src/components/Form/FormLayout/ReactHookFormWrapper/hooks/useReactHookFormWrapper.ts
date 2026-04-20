import {useForm, type UseFormProps} from "react-hook-form";

type Props<FormValues> = {
  onSubmitHandler: (data:FormValues) => void;
  defaultValues?: FormValues;
}

function useReactHookFormWrapper<FormValues extends object>({onSubmitHandler, defaultValues}: Props<FormValues>) {

  const formMethods = useForm<FormValues>({defaultValues} as UseFormProps<FormValues, any> | undefined)
  const {handleSubmit} = formMethods
  const onSubmit = handleSubmit(onSubmitHandler)

  return {onSubmit, formMethods}
}

export default useReactHookFormWrapper;