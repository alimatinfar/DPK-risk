import useActiveTab from "../../../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances.ts";
import toastPromise from "../../../../../../../utils/toastPromise.ts";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import useSearchPage from "../../../../../../search/hooks/useSearchPage.ts";
import type {AdminHighRiskFormStep3ShareProps} from "../AdminHighRiskFormStep3Share.tsx";
import type {AdminHighRiskFormStep3DuplicateUserModalProps} from "../AdminHighRiskFormStep3DuplicateUserModal.tsx";

function useAdminHighRiskFormStep3Share(
  {
    individuals, setCurrentStep
  }: Pick<AdminHighRiskFormStep3ShareProps, 'individuals' | 'setCurrentStep'>
) {

  const [activeTab, setActiveTab] = useActiveTab(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name)

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
    open: userDuplicateModalOpen, closeModal: closeUserDuplicateModalHandler, modalState: userDuplicateModalState,
    setModalState: setUserDuplicateModalState, shouldBeRemoved: userDuplicateShouldBeRemoved
  } = useModalOpen<AdminHighRiskFormStep3DuplicateUserModalProps['userDuplicateModalState']>(undefined)

  const {
    formMethods: searchUserFormMethods, onSubmit: searchUserOnSubmit,
    getResultData, data, isPending: searchUserLoading
  } = useSearchPage({
    // onSuccessHandler: (data) => (data?.data),
    activePersonType: activeTab as any
  })
  const searchUserResultData = getResultData({data})

  return {
    activeTab, setActiveTab, nextStepHandler, userDuplicateModalOpen, closeUserDuplicateModalHandler,
    setUserDuplicateModalState, userDuplicateModalState, userDuplicateShouldBeRemoved,
    searchUserResultData, searchUserFormMethods, searchUserOnSubmit, searchUserLoading
  }
}

export default useAdminHighRiskFormStep3Share;
