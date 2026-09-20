import {useEffect, useState} from "react";
import {
  EXIT_REASON_TYPE_KEYS,
  exitReasonTypeFieldName,
} from "../../../../../FormFields/ExitReasonTypeField/index.constances.ts";
import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useWatch} from "react-hook-form";
import {
  type AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";
import toastPromise from "../../../../../../../../utils/toastPromise.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import type {ExitCustomerFormDataType} from "../index.types.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake
  from "./useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsExitModalByLetter
  from "../useAdminHighRiskIndividualsLettersDetailIndividualsExitModalByLetter.ts";
import {
  announceReferenceFieldName,
  type AnnounceReferenceFieldType
} from "../../../../../FormFields/AnnouncingReferenceField/index.constances.ts";


function useAdminHighRiskIndividualsLettersDetailIndividualsExitModal(
  {
    onClose, modalState, refetch, referenceValue
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps,
    'onClose' | 'modalState' | 'refetch' | 'referenceValue'
  >
) {

  const [currentStep, setCurrentStep] = useState<number>(1)

  const [documentsList, setDocumentsList] = useState<AdminHighRiskIndividualsDocumentFormDataType[]>([])

  function prevHandler() {
    if (currentStep === 1) return onClose()

    setCurrentStep(prev => prev - 1)
  }

  function nextHandler() {
    if (currentStep === 3) return

    setCurrentStep(prev => prev + 1)
  }

  const {
    exitCustomerByUserMistake, exitCustomerByUserMistakeLoading
  } = useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake({
    onClose, modalState, refetch
  })

  const {
    exitCustomerByLetter, exitCustomerByLetterLoading
  } = useAdminHighRiskIndividualsLettersDetailIndividualsExitModalByLetter({
    modalState, onClose, documentsList, refetch
  })

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  const exitReasonTypeValue = useWatch({name: exitReasonTypeFieldName, control: formMethods.control})

  const reasonIsUserMistake = exitReasonTypeValue && exitReasonTypeValue?.id === EXIT_REASON_TYPE_KEYS.USER_MISTAKE

  function onSubmitHandler(formData: ExitCustomerFormDataType) {
    if (currentStep === 1) {
      nextHandler()
    } else if (currentStep === 2) {
      if (reasonIsUserMistake) {
        exitCustomerByUserMistake(formData)
      } else {
        nextHandler()
      }
    } else if (currentStep === 3) {
      if (documentsList.length === 0) return toastPromise().then(toast => toast.error('حداقل یک سند اضافه کنید'))
      exitCustomerByLetter(formData)
    }
  }

  useEffect(() => {
    if (!referenceValue) return
    formMethods.setValue(announceReferenceFieldName, referenceValue)
  }, [referenceValue]);

  const isFirstStep = currentStep === 1
  const isLastStep = (reasonIsUserMistake && currentStep === 2) || currentStep === 3

  const description = currentStep === 1 ? 'لطفا دلیل خروج را انتخاب کنید' :
    currentStep === 2 && reasonIsUserMistake ? 'لطفا توضیحات خود را وارد نمایید' : ''

  return {
    formMethods, onSubmit, prevHandler, isFirstStep, isLastStep, currentStep, reasonIsUserMistake,
    description, documentsList, setDocumentsList,
    loading: exitCustomerByLetterLoading || exitCustomerByUserMistakeLoading
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsExitModal;
