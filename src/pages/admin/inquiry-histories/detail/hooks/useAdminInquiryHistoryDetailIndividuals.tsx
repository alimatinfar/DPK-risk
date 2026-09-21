import {useMemo} from "react";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataType, ModalStateTypeId
} from "../../../high-risk-individuals/letters/detail/individuals/index.types.ts";
import getPersonTypeByNationality from "../../../../search/form/utils/getPersonTypeByNationality.ts";
import useModalOpen from "../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminInquiryHistoryDetailIndividualsDeleteModalProps
} from "../AdminInquiryHistoryDetailIndividualsDeleteModal.tsx";
import {responseSubmissionStatusSentId} from "../../FormFields/ResponseSubmissionStatusField/index.constances.ts";


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
        id: item?.id,
        customerId: item?.customerId,
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
  } = useModalOpen<AdminInquiryHistoryDetailIndividualsDeleteModalProps['modalState']>(false)

  const responseStatusSent = responseData?.data?.letter?.status === responseSubmissionStatusSentId

  return {
    individualsList, deletePersonModalOpen, deletePersonModalShouldBeRemoved, deletePersonModalState,
    setDeletePersonModalState, closeDeletePersonModal, responseStatusSent
  }
}

export default useAdminInquiryHistoryDetailIndividuals;
