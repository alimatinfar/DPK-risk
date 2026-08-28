import useAdminHighRiskIndividualsDocumentListModalStates
  from "../docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "../editModal/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import useAdminHighRiskIndividualsExitModalStates
  from "../exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType,
  AdminHighRiskIndividualsLettersDetailIndividualsDataType,
  AdminHighRiskIndividualsLettersDetailIndividualsResponseItemType, ModalStateTypeId
} from "../index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA} from "../index.constances.ts";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";


function useAdminHighRiskIndividualsLettersDetailIndividuals() {

  const {id: letterId} = useParams()

  const {
    open: editPersonModalOpen, shouldBeRemoved: editPersonModalShouldBeRemoved, closeModal: closeEditPersonModalHandler,
    modalState: editPersonModalState, setModalState: setEditPersonModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

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

  //fetch individuals list

  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsLettersDetailIndividualsResponseItemType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL_CUSTOMERS,
      params: {
        letterId
      }
    }
  })

  const individualsList: AdminHighRiskIndividualsLettersDetailIndividualsDataType = ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_INDIVIDUALS_FAKE_DATA

  return {
    setEditPersonModalState, setDocListModalState, setExitPersonModalState, editPersonModalShouldBeRemoved,
    editPersonModalOpen, closeEditPersonModalHandler, editPersonModalState, docListModalShouldBeRemoved,
    docListModalOpen, closeDocListModalHandler, docListModalState, exitPersonModalShouldBeRemoved,
    exitPersonModalOpen, closeExitPersonModalHandler, exitPersonModalState, personTitle,
    individualsList, individualsLoading: isFetching, individualsError: error
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividuals;
