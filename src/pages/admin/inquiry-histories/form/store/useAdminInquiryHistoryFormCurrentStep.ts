import {useAdminInquiryHistoriesFormStore} from "./useAdminInquiryHistoriesFormStore.ts";

function useAdminInquiryHistoryFormCurrentStep() {
  const setFormData = useAdminInquiryHistoriesFormStore(state => state.setFormData)
  const currentStep = useAdminInquiryHistoriesFormStore(state => state.formData.currentStep)

  function setCurrentStep(currentStep: number) {
    setFormData({currentStep})
  }

  return {
    currentStep, setCurrentStep
  }
}

export default useAdminInquiryHistoryFormCurrentStep;
