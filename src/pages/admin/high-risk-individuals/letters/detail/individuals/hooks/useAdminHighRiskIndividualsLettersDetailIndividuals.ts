import useAdminHighRiskIndividualsDocumentListModalStates
  from "../docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "../editModal/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import useAdminHighRiskIndividualsExitModalStates
  from "../exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType,
  AdminHighRiskIndividualsLettersDetailIndividualsDataType,
  AdminHighRiskIndividualsLettersDetailIndividualsResponseItemType, ModalStateTypeId
} from "../index.types.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA,
  EXIT_PERSON_FROM_LETTER_KEYS
} from "../index.constances.ts";
import {useParams} from "react-router";
import type {AdminHighRiskIndividualsLettersDetailPageProps} from "../../index.types.ts";
import {useMemo} from "react";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances.ts";
import moment from "moment-jalaali";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import {
  legalTypeFieldName
} from "../../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";


function useAdminHighRiskIndividualsLettersDetailIndividuals(
  {responseData}: AdminHighRiskIndividualsLettersDetailPageProps
) {

  const {id: letterId} = useParams()

  // const {
  //   open: editPersonModalOpen, shouldBeRemoved: editPersonModalShouldBeRemoved, closeModal: closeEditPersonModalHandler,
  //   modalState: editPersonModalState, setModalState: setEditPersonModalState
  // } = useModalOpen<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

  const {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  } = useAdminHighRiskIndividualsDocumentListModalStates()

  const {
    exitPersonModalOpen, exitPersonModalShouldBeRemoved, closeExitPersonModalHandler,
    exitPersonModalState, setExitPersonModalState
  } = useAdminHighRiskIndividualsExitModalStates<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

  const {
    personTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle({
    modalState: exitPersonModalState
  })

  const individualsList: AdminHighRiskIndividualsLettersDetailIndividualsDataType = useMemo(function () {
    const customers = responseData?.data?.customers
    if (!customers) return []

    return customers?.map(item => {

      const type = item?.isLegal ? SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name : item?.nationality === 1 ?
        SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name : SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name

      return {
        type,
        id: item?.customerId,
        //TODO should set riskCustomerId from response
        riskCustomerId: '',
        name: item?.isLegal ? item?.lastName : item?.firstName,
        ...item?.isLegal ? {[legalTypeFieldName]: ''} : {lastName: item?.lastName},
        nationalCode: item?.nationalID,
        ...item?.letterNo ? {
          exitLetter: {
            id: item?.id,
            letterDate: displayDate(item?.letterDate),
            letterNumber: item?.letterNo,
            description: item?.description,
            reference: item?.letterRefTitle
          }
        } : {},
        exitType: (item?.letterNo && item?.isOut) ? EXIT_PERSON_FROM_LETTER_KEYS.WITH_LETTER : item?.isOutValidityDate ?
          EXIT_PERSON_FROM_LETTER_KEYS.WITH_EXPIRE_DATE : undefined
      }
    })
  }, [responseData])

  return {
    setExitPersonModalState, exitPersonModalShouldBeRemoved, setDocListModalState,
    docListModalShouldBeRemoved, docListModalOpen, closeDocListModalHandler, docListModalState,
    exitPersonModalOpen, closeExitPersonModalHandler, exitPersonModalState, personTitle,
    individualsList
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividuals;
