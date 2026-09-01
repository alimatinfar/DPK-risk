import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore.ts";
import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../../../../FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";
import {useWatch} from "react-hook-form";
import {useEffect} from "react";
import useAdminHighRiskFormStep1ExistLetter from "./useAdminHighRiskFormStep1ExistLetter.ts";


function useAdminHighRiskFormStep1() {

  const defaultValues = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)
  const formIsDirty = useAdminHighRiskIndividualsFormStore(state => state.formData.formIsDirty)

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<AdminHighRiskIndividualsBaseFormFieldsType>({
    onSubmitHandler: nextStepHandler, defaultValues
  })

  const formValues = useWatch({control: formMethods.control})

  useEffect(() => {
    const formHasValue = Object.values(formValues).some(value => !!value)

    if (!formIsDirty && formHasValue) {
      setFormData({formIsDirty: true})
    } else if (formIsDirty && !formHasValue) {
      setFormData({formIsDirty: false})
    }
  }, [formIsDirty, formValues]);

  const {
    checkExistLetterLoading, checkExistLetter
  } = useAdminHighRiskFormStep1ExistLetter()

  function nextStepHandler(formData: AdminHighRiskIndividualsBaseFormFieldsType) {
    checkExistLetter(formData).then((response) => {
      //TODO handling when this letter is exist prevent from continuing
      setFormData({
        currentStep: 2,
        step1: formData
      })
    })
  }

  return {
    formMethods, onSubmit, checkExistLetterLoading
  }
}

export default useAdminHighRiskFormStep1;
