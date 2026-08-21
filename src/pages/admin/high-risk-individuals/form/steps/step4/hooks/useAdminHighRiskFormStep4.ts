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

function useAdminHighRiskFormStep4() {

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)
  console.log({individualsExtraData})
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

  function initialStep4Data() {
    const filteredData = individualsExtraData?.filter(item => {
      return individuals?.some(addedIndividual => addedIndividual?.[customerIdFieldName] === item?.[customerIdFieldName])
    })

    const dataListIsNotExists: AdminHighRiskIndividualsFormStep4PersonDataType[] = individuals.filter(item => {
      return !filteredData?.some(filteredDataItem => filteredDataItem?.[customerIdFieldName] === item?.[customerIdFieldName])
    })?.map(item => ({
      [customerIdFieldName]: item?.[customerIdFieldName],
      [expireDateFieldName]: undefined,
      [entryReasonsFieldName]: undefined,
      documentsList: [],
    }))

    setFormData({
      step4: {
        individualsExtraData: [
          ...filteredData,
          ...dataListIsNotExists
        ]
      }
    })
  }

  useEffect(() => {
    initialStep4Data()
  }, []);

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler, mode: "all"
  })

  function setFormForCurrentPersonHandler(data: Partial<AdminHighRiskIndividualsFormStep4PersonDataType>) {
    setFormData({
      step4: {
        individualsExtraData: individualsExtraData?.map(item => {
          if (item?.[customerIdFieldName] === activePerson) {
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
    console.log({formData})
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

  function checkExtraDataIsCompleted(extraData: AdminHighRiskIndividualsFormStep4PersonDataType) {
    console.log({1: extraData?.documentsList?.length !== 0, 2: extraData?.[expireDateFieldName], 3:extraData?.[entryReasonsFieldName]})
    return Boolean(extraData?.documentsList?.length !== 0 && extraData?.[expireDateFieldName] && extraData?.[entryReasonsFieldName])
  }

  return {
    activePerson, setActivePerson, formMethods, onSubmit, documentsList, setDocumentsList,
    checkExtraDataIsCompleted
  }
}

export default useAdminHighRiskFormStep4;