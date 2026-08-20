import Chips from "../../../../../../components/others/Chips/Chips";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {customerIdFieldName, type ResultCardDataTypeShareFields} from "../../../../../search/result/ResultCard.types";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";

function AdminHighRiskFormStep3SelectedIndividuals() {

  const selectedIndividuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  function removeHandler(customerId: ResultCardDataTypeShareFields[typeof customerIdFieldName]) {
    const filteredIndividuals = selectedIndividuals?.filter(individual => individual?.[customerIdFieldName] !== customerId)
    setFormData({step3: {individuals: filteredIndividuals}})
  }

  return selectedIndividuals?.length !== 0 ? (
    <div className='bg-gray-100 rounded-md flex flex-col p-4 gap-4'>
      <p className='font-medium text-gray-900'>
        اشخاص انتخاب شده
      </p>

      <div className='flex gap-2 flex-wrap'>
        {selectedIndividuals?.map((individual, index) => {

          const icon = Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).find(value => value.name === individual.type)?.icon

          return (
            <Chips
              key={individual?.[customerIdFieldName]}
              text={individual?.name}
              icon={icon}
              onClose={() => removeHandler(individual?.[customerIdFieldName])}
            />
          )
        })}
      </div>
    </div>
  ) : null;
}

export default AdminHighRiskFormStep3SelectedIndividuals;