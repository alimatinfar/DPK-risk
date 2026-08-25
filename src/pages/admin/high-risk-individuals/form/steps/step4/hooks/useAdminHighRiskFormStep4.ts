import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../../search/result/ResultCard.types";
import type {
  AdminHighRiskIndividualsFormStep4PersonDataType,
  AdminHighRiskIndividualsFormStep4Type
} from "../index.types";
import {expireDateFieldName} from "../../../../FormFields/ExpireDateField/index.constances";
import {entryReasonsFieldName} from "../../../../FormFields/EntryReasonsField/index.constances";
import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper";
import {useEffect, useCallback, useState} from "react";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types";
import toastPromise from "../../../../../../../utils/toastPromise";
import useAdminHighRiskIndividualsFormCurrentStep from "../../../store/useAdminHighRiskIndividualsFormCurrentStep";
import {useWatch} from "react-hook-form";


function useAdminHighRiskFormStep4() {

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)

  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  const {setCurrentStep} = useAdminHighRiskIndividualsFormCurrentStep()

  const [activePerson, setActivePerson] = useState<ResultPersonCardDataType['customerId'] | undefined>(individuals?.[0]?.[customerIdFieldName])

  const getActiveExtraDataItem = useCallback(function () {
    return individualsExtraData?.find(item => item?.[customerIdFieldName] === activePerson)
  }, [activePerson, individualsExtraData])

  const documentsList = getActiveExtraDataItem()?.documentsList || []

  useEffect(() => {
    const activeExtraDataItem = getActiveExtraDataItem()
    formMethods.reset({
      [expireDateFieldName]: activeExtraDataItem?.[expireDateFieldName],
      [entryReasonsFieldName]: activeExtraDataItem?.[entryReasonsFieldName]
    })
  }, [activePerson]);

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler, mode: "all"
  })

  const formValues = useWatch({control: formMethods.control}) as AdminHighRiskIndividualsFormStep4PersonDataType

  useEffect(() => {
    setFormForCurrentPersonHandler(formValues)
  }, [formValues]);

  function setFormForCurrentPersonHandler(data: Partial<AdminHighRiskIndividualsFormStep4PersonDataType>) {
    setFormData({
      step4: {
        individualsExtraData: individualsExtraData?.map(item => {
          if (item?.[customerIdFieldName] === activePerson) {
            console.log({data})
            return {
              ...item,
              ...data
            }
          } else {
            return item
          }
        })
      }
    })
  }

  function onSubmitHandler(formData: AdminHighRiskIndividualsFormStep4Type) {
    setFormForCurrentPersonHandler(formData)

    if (documentsList?.length === 0)
      return toastPromise().then(toast => toast.error('حداقل یک سند اضافه کنید'))

    if (!individualsExtraData?.every(item => checkExtraDataIsCompleted(item)))
      return toastPromise().then(toast => toast.error('اطلاعات همه افراد به طور کامل وارد نشده است'))

    setCurrentStep(5)
  }

  function setDocumentsList(documentsList: AdminHighRiskIndividualsDocumentFormDataType[]) {
    setFormForCurrentPersonHandler({documentsList})
  }

  function checkExtraDataIsCompleted(extraData: AdminHighRiskIndividualsFormStep4PersonDataType | undefined) {
    return Boolean(extraData?.documentsList?.length !== 0 && extraData?.[expireDateFieldName] && extraData?.[entryReasonsFieldName])
  }

  return {
    activePerson, setActivePerson, formMethods, onSubmit, documentsList, setDocumentsList,
    checkExtraDataIsCompleted
  }
}

export default useAdminHighRiskFormStep4;
