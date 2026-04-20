import {useCallback, useEffect, useState} from "react";
import type {SetStateType} from "../types/SetStateType.ts";


type Props<T> = {
  modalOpen: T;
  setModalOpen: SetStateType<T>;
}

function useModalPromise<T>({modalOpen, setModalOpen}: Props<T>) {

  const [resolveModalPromise, setResolveModalPromise] = useState<((value: unknown) => void) | undefined>(undefined);

  useEffect(function () {
    if (modalOpen) return
    setResolveModalPromise(undefined)
  }, [modalOpen, setModalOpen])

  const openModalHandler = useCallback((modalState: T) => {
    return new Promise((resolve) => {
      setResolveModalPromise(() => resolve)
      setModalOpen(modalState)
    })
  }, [setResolveModalPromise, setModalOpen])

  return {
    resolveModalPromise, openModalHandler
  }
}

export default useModalPromise