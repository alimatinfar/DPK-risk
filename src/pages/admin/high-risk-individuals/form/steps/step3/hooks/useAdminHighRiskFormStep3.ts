import {useState} from "react";
import useActiveTab from "../../../../../../../components/others/Tab/hooks/useActiveTab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances";
import type {ResultPersonCardDataType} from "../../../../../../search/result/ResultCard.types";
import useAdminHighRiskIndividualsFormCurrentStep from "../../../store/useAdminHighRiskIndividualsFormCurrentStep";
import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore";
import toastPromise from "../../../../../../../utils/toastPromise";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen";


function useAdminHighRiskFormStep3() {

  const [activeTab, setActiveTab] = useActiveTab(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name)

  const [foundedIndividuals, setFoundedIndividuals] = useState<ResultPersonCardDataType[]>([])

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const {setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  function nextStepHandler() {
    if (individuals.length === 0)
      return toastPromise().then(toast => toast.error('حداقل یک شخص اضافه کنید'))

    setCurrentStep(4)
  }

  const {
    open: userDuplicateModalOpen, closeModal:closeUserDuplicateModalHandler, modalState: userDuplicateModalState,
    setModalState: setUserDuplicateModalState, shouldBeRemoved: userDuplicateShouldBeRemoved
  } = useModalOpen<(() => void) | undefined>(undefined)
  console.log({userDuplicateModalState})
  return {
    activeTab, setActiveTab, foundedIndividuals, setFoundedIndividuals, nextStepHandler,
    userDuplicateModalOpen, closeUserDuplicateModalHandler, setUserDuplicateModalState,
    userDuplicateModalState, userDuplicateShouldBeRemoved
  }
}

export default useAdminHighRiskFormStep3;