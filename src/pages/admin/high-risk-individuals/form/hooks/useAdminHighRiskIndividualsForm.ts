import {useFormStepContext} from "../../../../../contexts/FormStepContext.tsx";
import type {AdminHighRiskIndividualsFormDataType} from "../index.types.ts";
import useReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";

function useAdminHighRiskIndividualsForm() {

  const [currentStep, setCurrentStep] = useFormStepContext()

  const {
    onSubmit, formMethods
  } = useReactHookFormWrapper<AdminHighRiskIndividualsFormDataType>({
    onSubmitHandler
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsFormDataType) {
    console.log({formData})
  }

  return {
    onSubmit, formMethods, setCurrentStep
  }
}

export default useAdminHighRiskIndividualsForm;
