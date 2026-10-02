import {useEffect, useState} from "react";
import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {AdminRiskTreeColumnProps} from "../components/AdminRiskTreeColumn.tsx";

function useAdminRiskTreeColumn(
  {previousSelectedId}: Pick<AdminRiskTreeColumnProps, 'previousSelectedId'>
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: any) {
    console.log({formData})
  }

  const [wasChanged, setWasChanged] = useState(false)
  const [hasError, setHasError] = useState(true)

  function cancelHandler() {
    setWasChanged(false)
    formMethods.reset()
  }

  useEffect(() => {
    cancelHandler()
  }, [previousSelectedId]);

  return {
    formMethods, onSubmit, setWasChanged, wasChanged, hasError, cancelHandler
  }
}

export default useAdminRiskTreeColumn;
