import useAdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsDocs.ts";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentType,
  AdminHighRiskIndividualsLettersDetailResponseType
} from "../index.types.ts";
import useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine
  from "./useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine.ts";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";

function useAdminHighRiskIndividualsLettersDetailDocuments() {

  const {id: letterId} = useParams()

  const {
    data, isFetching: infoLoading, error: infoError
  } = useFetchData<AdminHighRiskIndividualsLettersDetailResponseType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL,
      params: {
        letterId
      }
    }
  })

  const info = data?.data

  const {
    documents
  } = useAdminHighRiskIndividualsLettersDetailDocumentsDocs()

  const {
    timeLineHistories
  } = useAdminHighRiskIndividualsLettersDetailDocumentsTimeLine()

  const {
    open: deleteModalOpen, shouldBeRemoved: deleteModalShouldBeRemoved, closeModal: closeDeleteModalHandler,
    modalState: deleteModalState, setModalState: setDeleteModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | false>(false)

  const {
    open: formModalOpen, shouldBeRemoved: formModalShouldBeRemoved, closeModal: closeFormModalHandler,
    modalState: formModalState, setModalState: setFormModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailDocumentType | boolean>(false)

  return {
    documents, timeLineHistories, info, infoLoading, infoError,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocuments;
