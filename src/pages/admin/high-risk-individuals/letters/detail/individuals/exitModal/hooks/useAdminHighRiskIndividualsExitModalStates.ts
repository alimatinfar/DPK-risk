import useModalOpen from "../../../../../../../../hooks/modal/useModalOpen.tsx";

function useAdminHighRiskIndividualsExitModalStates<T>(defaultValue: T) {

  const {
    open: exitPersonModalOpen, shouldBeRemoved: exitPersonModalShouldBeRemoved, closeModal: closeExitPersonModalHandler,
    modalState: exitPersonModalState, setModalState: setExitPersonModalState
  } = useModalOpen<T>(defaultValue)

  return {
    exitPersonModalOpen, exitPersonModalShouldBeRemoved, closeExitPersonModalHandler,
    exitPersonModalState, setExitPersonModalState
  }
}

export default useAdminHighRiskIndividualsExitModalStates;
