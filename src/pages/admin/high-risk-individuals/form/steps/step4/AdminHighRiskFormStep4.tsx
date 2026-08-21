import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import Card from "../../../../../../components/others/Card/Card";
import AdminHighRiskFormStep4Individuals from "./AdminHighRiskFormStep4Individuals";
import AdminHighRiskFormStep4Form from "./AdminHighRiskFormStep4Form";
import useReactHookFormWrapper from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  type AdminHighRiskIndividualsFormStep4PersonDataType,
  type AdminHighRiskIndividualsFormStep4Type
} from "./index.types";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import {useEffect, useState } from "react";
import {expireDateFieldName} from "../../../FormFields/ExpireDateField/index.constances";
import {
  entryReasonsFieldName,
} from "../../../FormFields/EntryReasonsField/index.constances";

function AdminHighRiskFormStep4() {

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

  return (
    <div className='flex flex-col gap-y-4'>
      <Card
        paddingClass=' '
        className='flex'
      >
        <AdminHighRiskFormStep4Individuals
          activePerson={activePerson} setActivePerson={setActivePerson}
        />

        <AdminHighRiskFormStep4Form
          formMethods={formMethods} onSubmit={onSubmit}
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons
        onClick={onSubmit}
      />
    </div>
  );
}

export default AdminHighRiskFormStep4;
