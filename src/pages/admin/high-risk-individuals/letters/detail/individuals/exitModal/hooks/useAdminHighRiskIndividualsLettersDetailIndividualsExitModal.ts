import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "../../editModal/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import {useState} from "react";
import {
  EXIT_REASON_TYPE_KEYS,
  exitReasonTypeFieldName,
  type ExitReasonTypeFieldType
} from "../../../../../FormFields/ExitReasonTypeField/index.constances.ts";
import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useWatch} from "react-hook-form";
import {
  type AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";

type FormDataType = {
  [exitReasonTypeFieldName]: ExitReasonTypeFieldType
}

function useAdminHighRiskIndividualsLettersDetailIndividualsExitModal(
  {
    onClose, modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps, 'onClose' | 'modalState'>
) {

  const {
    personTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle({
    modalState
  })

  const [currentStep, setCurrentStep] = useState<number>(1)

  function prevHandler() {
    if (currentStep === 1) return onClose()

    setCurrentStep(prev => prev - 1)
  }

  function nextHandler() {
    if (currentStep === 3) return

    setCurrentStep(prev => prev + 1)
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  const exitReasonTypeValue = useWatch({name: exitReasonTypeFieldName, control: formMethods.control})

  const reasonIsUserMistake = exitReasonTypeValue && exitReasonTypeValue?.id === EXIT_REASON_TYPE_KEYS.USER_MISTAKE

  function onSubmitHandler(formData: FormDataType) {
    if (currentStep === 1) {
      nextHandler()
    } else if (currentStep === 2) {
      if (reasonIsUserMistake) {
        console.log('exit user by mistake')
      } else {
        nextHandler()
      }
    } else {
      console.log('exit citing the letter')
    }
  }

  const isFirstStep = currentStep === 1
  const isLastStep = (reasonIsUserMistake && currentStep === 2) || currentStep === 3

  const description = currentStep === 1 ? 'لطفا دلیل خروج را انتخاب کنید' :
    currentStep === 2 && reasonIsUserMistake ? 'لطفا توضیحات خود را وارد نمایید' : ''

  return {
    personTitle, formMethods, onSubmit, prevHandler, isFirstStep, isLastStep, currentStep, reasonIsUserMistake,
    description
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsExitModal;
