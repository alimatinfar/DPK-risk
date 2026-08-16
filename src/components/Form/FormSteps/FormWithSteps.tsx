"use client";

import {useEffect} from "react";
import type {FormStepsTypes} from "./index.types.ts";
import FormSteps from "./FormSteps.tsx";


type Props = {
  steps: FormStepsTypes[];
}

function FormWithSteps({steps}: Props) {
  // const [currentStep, setCurrentStep] = useFormStepContext()

  // const {
  //   open: resetFormModalOpen, closeModalHandler: closeResetFormModalHandler,
  //   openModalHandler: openResetFormModalHandler, shouldBeRemoved: resetFormModalShouldBeRemoved
  // } = useModalOpenBoolean(false)

  useEffect(function () {
    // const step1LocalStorage = Ls.get(LS_KEYS[formLocalStorageKey].formValues[1])
    // const step1FieldsHaveValue = !step1LocalStorage ? false : Object.entries(step1LocalStorage)?.some(([key, value]: any) => {
    //   return !isNullOrEmptyString(value) && value?.length !== 0
    // })
    //
    // const step2LocalStorage = Ls.get(LsKeys[formLocalStorageKey].formValues[2])
    //
    // if ((!step2LocalStorage && !step1FieldsHaveValue) || isEditMode) return

    // setResetFormModalOpen(true)
    // Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
    //
    // return function () {
    //   Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
    // }
  }, []);

  // useEffectExceptFirstRender(
  //   function () {
  //     Ls.add(LsKeys[formLocalStorageKey]['step'], currentStep || 1);
  //   },
  //   [currentStep]
  // )

  // function resetFormData() {
  //   setLoading && setLoading(true)
  //   setTimeout(function () {
  //     // Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
  //     setLoading && setLoading(false)
  //   }, 100)
  //   closeResetFormModalHandler()
  // }

  return (
    <div>
      <FormSteps steps={steps}/>

      {/*<FormWithStepsConfirmModal*/}
      {/*  onClick={resetFormData}*/}
      {/*  open={resetFormModalOpen} onClose={closeResetFormModalHandler}*/}
      {/*/>*/}
    </div>
  );
}

export default FormWithSteps
