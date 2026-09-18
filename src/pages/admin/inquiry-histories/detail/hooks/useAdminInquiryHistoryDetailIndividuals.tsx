import {useMemo} from "react";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataType, ModalStateTypeId
} from "../../../high-risk-individuals/letters/detail/individuals/index.types.ts";
import getPersonTypeByNationality from "../../../../search/form/utils/getPersonTypeByNationality.ts";
import useModalOpen from "../../../../../hooks/modal/useModalOpen.tsx";


function useAdminInquiryHistoryDetailIndividuals(
  {responseData}: Pick<AdminInquiryHistoryLetterDetailProps, 'responseData'>
) {

  const individualsList: AdminHighRiskIndividualsLettersDetailIndividualsDataType = useMemo(function () {
    const customers = responseData?.data?.customers
    if (!customers) return []

    return customers?.map(item => {

      const type = getPersonTypeByNationality({
        nationality: item?.nationality, isLegal: item?.isLegal
      })

      return {
        type,
        id: item?.customerId,
        name: item?.isLegal ? item?.lastName : item?.firstName,
        ...item?.isLegal ? {[legalTypeFieldName]: ''} : {lastName: item?.lastName},
        nationalCode: item?.nationalID,
      }
    })
  }, [responseData])

  const {
    open: deletePersonModalOpen, shouldBeRemoved: deletePersonModalShouldBeRemoved,
    modalState: deletePersonModalState, setModalState: setDeletePersonModalState,
    closeModal: closeDeletePersonModal
  } = useModalOpen<number | boolean>(false)

  return {
    individualsList, deletePersonModalOpen, deletePersonModalShouldBeRemoved, deletePersonModalState,
    setDeletePersonModalState, closeDeletePersonModal
  }
}

export default useAdminInquiryHistoryDetailIndividuals;
