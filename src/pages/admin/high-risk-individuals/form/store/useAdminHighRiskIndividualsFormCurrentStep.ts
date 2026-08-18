import {useAdminHighRiskIndividualsFormStore} from "./useAdminHighRiskIndividualsFormStore.ts";

function useAdminHighRiskIndividualsFormCurrentStep() {
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)
  const currentStep = useAdminHighRiskIndividualsFormStore(state => state.formData.currentStep)

  function setCurrentStep(currentStep: number) {
    setFormData({currentStep})
  }

  return {
    currentStep, setCurrentStep
  }
}

export default useAdminHighRiskIndividualsFormCurrentStep;
