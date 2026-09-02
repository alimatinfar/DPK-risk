import useActiveTab from "../../../../../../../components/others/Tab/hooks/useActiveTab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances";
import useAdminHighRiskIndividualsFormCurrentStep from "../../../store/useAdminHighRiskIndividualsFormCurrentStep";
import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore";
import toastPromise from "../../../../../../../utils/toastPromise";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen";
import useSearchPage from "../../../../../../search/hooks/useSearchPage.ts";


function useAdminHighRiskFormStep3() {

  const [activeTab, setActiveTab] = useActiveTab(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name)

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)

  const {setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  // function initiateStep4Data() {
  //   const filteredData = individualsExtraData?.filter(item => {
  //     return individuals?.some(addedIndividual => addedIndividual?.[customerIdFieldName] === item?.[customerIdFieldName])
  //   })
  //
  //   const dataListIsNotExists: AdminHighRiskIndividualsFormStep4PrevPersonDataType[] = individuals.filter(item => {
  //     return !filteredData?.some(filteredDataItem => filteredDataItem?.[customerIdFieldName] === item?.[customerIdFieldName])
  //   })?.map(item => ({
  //     [customerIdFieldName]: item?.[customerIdFieldName],
  //     [expireDateFieldName]: undefined,
  //     [entryReasonsFieldName]: '',
  //     documentsList: [],
  //   }))
  //
  //   setFormData({
  //     step4: {
  //       individualsExtraData: [
  //         ...filteredData,
  //         ...dataListIsNotExists
  //       ]
  //     }
  //   })
  // }

  function nextStepHandler() {
    if (individuals.length === 0)
      return toastPromise().then(toast => toast.error('حداقل یک شخص اضافه کنید'))

    // initiateStep4Data()
    setCurrentStep(4)
  }

  const {
    open: userDuplicateModalOpen, closeModal:closeUserDuplicateModalHandler, modalState: userDuplicateModalState,
    setModalState: setUserDuplicateModalState, shouldBeRemoved: userDuplicateShouldBeRemoved
  } = useModalOpen<(() => void) | undefined>(undefined)

  const {
    formMethods: searchUserFormMethods, onSubmit: searchUserOnSubmit,
    resultData: searchUserResultData, isPending: searchUserLoading
  } = useSearchPage({
    // onSuccessHandler: (data) => (data?.data),
    activePersonTypeFromParent: activeTab as any
  })

  return {
    activeTab, setActiveTab, nextStepHandler, userDuplicateModalOpen, closeUserDuplicateModalHandler,
    setUserDuplicateModalState, userDuplicateModalState, userDuplicateShouldBeRemoved,
    searchUserResultData, searchUserFormMethods, searchUserOnSubmit, searchUserLoading
  }
}

export default useAdminHighRiskFormStep3;
