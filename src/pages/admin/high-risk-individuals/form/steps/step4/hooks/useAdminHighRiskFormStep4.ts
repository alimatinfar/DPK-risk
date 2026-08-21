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
import { useEffect, useState } from "react";

function useAdminHighRiskFormStep4() {

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

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

  const [activePerson, setActivePerson] = useState<ResultPersonCardDataType['customerId'] | undefined>(individuals?.[0]?.[customerIdFieldName])

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsFormStep4Type) {
    console.log({formData})
  }

  function nextStepHandler() {
    onSubmit()
  }

  return {
    activePerson, setActivePerson, formMethods, onSubmit
  }
}

export default useAdminHighRiskFormStep4;