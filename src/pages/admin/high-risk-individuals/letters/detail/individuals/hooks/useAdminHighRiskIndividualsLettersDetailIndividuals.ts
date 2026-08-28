import useAdminHighRiskIndividualsDocumentListModalStates
  from "../docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "../editModal/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import useAdminHighRiskIndividualsExitModalStates
  from "../exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";
import useModalOpen from "../../../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType, ModalStateTypeId
} from "../index.types.ts";


function useAdminHighRiskIndividualsLettersDetailIndividuals() {

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

  return {
    setEditPersonModalState, setDocListModalState, setExitPersonModalState, editPersonModalShouldBeRemoved,
    editPersonModalOpen, closeEditPersonModalHandler, editPersonModalState, docListModalShouldBeRemoved,
    docListModalOpen, closeDocListModalHandler, docListModalState, exitPersonModalShouldBeRemoved,
    exitPersonModalOpen, closeExitPersonModalHandler, exitPersonModalState, personTitle,
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividuals;
