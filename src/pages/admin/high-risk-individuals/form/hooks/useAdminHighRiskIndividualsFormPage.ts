import useCustomBlocker from "../../../../../hooks/useCustomBlocker.ts";
import {useAdminHighRiskIndividualsFormStore} from "../store/useAdminHighRiskIndividualsFormStore.ts";
import {useNavigate} from "react-router";
import useModalOpenBoolean from "../../../../../hooks/modal/useModalOpenBoolean.ts";
import useAdminHighRiskIndividualsFormCurrentStep from "../store/useAdminHighRiskIndividualsFormCurrentStep.ts";
import {useEffect} from "react";


function useAdminHighRiskIndividualsFormPage() {

  const {currentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  const {
    openModalHandler: openExitFormModalHandler, closeModalHandler: closeExitFormModalHandler,
    open: exitFormOpen, shouldBeRemoved: exitFormShouldBeRemoved
  } = useModalOpenBoolean(false)

  const formIsDirty = useAdminHighRiskIndividualsFormStore(state => state.formData.formIsDirty)
  const {
    blocker, pageIsBlocked
  } = useCustomBlocker(formIsDirty)

  function closeExitFormModalAndResetBlocker() {
    closeExitFormModalHandler()
    blocker.reset && blocker.reset()
  }

  useEffect(() => {
    if (pageIsBlocked) {
      openExitFormModalHandler()
    }
  }, [pageIsBlocked]);

  const clearForm = useAdminHighRiskIndividualsFormStore(state => state.clearForm)

  const navigate = useNavigate()

  function exitFormHandler() {
    clearForm()
    blocker.proceed && blocker.proceed()
  }

  return {
    currentStep, exitFormShouldBeRemoved, exitFormOpen,
    closeExitFormModalAndResetBlocker, exitFormHandler
  }
}

export default useAdminHighRiskIndividualsFormPage;
