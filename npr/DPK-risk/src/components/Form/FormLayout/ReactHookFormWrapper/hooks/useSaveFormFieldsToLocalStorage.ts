import Ls from "../../../../../utils/customLocalStorage.ts";
import {useEffect} from "react";
import type {ReactHookFormWrapperProps} from "../ReactHookFormWrapper.tsx";


type Props = {
  lsKey: string;
  setValue: ReactHookFormWrapperProps['formMethods']['setValue'];
  getValues: ReactHookFormWrapperProps['formMethods']['getValues'];
  disableSetDefaultValue?: boolean;
} & Pick<ReactHookFormWrapperProps, 'formMethods'>

function useSaveFormFieldsToLocalStorage<FormDataType>({lsKey, setValue, getValues, disableSetDefaultValue}: Props) {

  useEffect(function() {
    if (disableSetDefaultValue) return

    setTimeout(function () {
      const defaultValues: FormDataType = Ls.get(lsKey)

      if (!defaultValues) return
      Object.keys(defaultValues).forEach(item => {
        const itemIns = item as keyof FormDataType
        setValue(itemIns, defaultValues[itemIns])
      })
    }, 300)
  },[])

  function saveDataToLocalStorage() {
    Ls.add(lsKey, getValues())
  }

  return saveDataToLocalStorage
}

export default useSaveFormFieldsToLocalStorage;