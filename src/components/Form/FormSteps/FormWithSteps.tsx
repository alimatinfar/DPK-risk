"use client";

import {useFormStepContext} from "../../../contexts/FormStepContext.tsx";
import {useEffect, useState} from "react";
import Ls, {formLocalStorageKeyType} from "@/utils/customLocalStorage";
import useEffectExceptFirstRender from "@/hooks/useEffectExceptFirstRender";
import BreadCrumbWithBackButton from "@/components/sections/BreadCrumb/BreadCrumbWithBackButton";
import Steps from "@/components/Steps/Steps";
import {StepTyps} from "@/types/StepTyps";
import {LsKeys} from "@/constance/LocalStorageKeys";
import Loading from "@/app/dashboard/loading";
import {SetStateType} from "@/types/SetStateType";
import FormWithStepsConfirmModal from "@/components/Form/FormLayout/FormWithSteps/FormWithStepsConfirmModal";
import isNullOrEmptyString from "@/utils/isNullOrEmptyString";


type Props = {
  label: string;
  formLocalStorageKey: formLocalStorageKeyType;
  steps: StepTyps[];
  loading?: boolean;
  setLoading?: SetStateType<boolean>;
  isEditMode?: boolean;
}

function FormWithSteps({label, steps, formLocalStorageKey, loading = false, setLoading, isEditMode}: Props) {
  const [currentStep, setCurrentStep] = useFormStepContext()

  const [resetFormModalOpen, setResetFormModalOpen] = useState(false)

  useEffect(function () {
    const step1LocalStorage = Ls.get(LsKeys[formLocalStorageKey].formValues[1])
    const step1FieldsHaveValue = !step1LocalStorage ? false : Object.entries(step1LocalStorage)?.some(([key, value]: any) => {
      return !isNullOrEmptyString(value) && value?.length !== 0
    })

    const step2LocalStorage = Ls.get(LsKeys[formLocalStorageKey].formValues[2])

    if ((!step2LocalStorage && !step1FieldsHaveValue) || isEditMode) return

    setResetFormModalOpen(true)
    // Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
    //
    // return function () {
    //   Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
    // }
  }, []);

  useEffectExceptFirstRender(
    function () {
      Ls.add(LsKeys[formLocalStorageKey]['step'], currentStep || 1);
    },
    [currentStep]
  )

  function onBack() {
    setCurrentStep((prev) => prev - 1);
  }

  function resetFormData() {
    setLoading && setLoading(true)
    setTimeout(function () {
      Ls.clearAllLocalStorageDataWhenLeaving(formLocalStorageKey)
      setLoading && setLoading(false)
    }, 100)
    setResetFormModalOpen(false)
  }

  return (
    <div>
      <BreadCrumbWithBackButton
        steps={[{label}]}
        {...(currentStep !== 1 && {onBack})}
      />

      {loading ? <Loading/> : <Steps steps={steps}/>}

      <FormWithStepsConfirmModal
        modalOpen={resetFormModalOpen} setModalIsOpen={setResetFormModalOpen} onClick={resetFormData}
      />
    </div>
  );
}

export default FormWithSteps
