import useModalOpen from "./useModalOpen.tsx";
import {useCallback} from "react";

function useModalOpenBoolean(defaultValue: boolean) {

  const {
    open, closeModal, shouldBeRemoved, setModalState
  }  = useModalOpen<boolean>(defaultValue)

  const openModalHandler = useCallback(function () {
    setModalState(true)
  }, [setModalState])

  return {
    open, closeModalHandler: closeModal,
    shouldBeRemoved, openModalHandler,
  }
}

export default useModalOpenBoolean;