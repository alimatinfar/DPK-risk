import Chips from "../../../../../../components/others/Chips/Chips";
import {
  customerIdFieldName,
  type ResultCardDataTypeShareFields,
  type ResultPersonCardDataType
} from "../../../../../search/result/ResultCard.types";
import getPersonTypeItem from "../../../../../search/form/utils/getPersonTypeItem";


type Props = {
  selectedIndividuals: ResultPersonCardDataType[];
  setFormData: any;
}

function AdminHighRiskFormStep3SelectedIndividuals(
  {
    selectedIndividuals, setFormData
  }: Props
) {

  function removeHandler(customerId: ResultCardDataTypeShareFields[typeof customerIdFieldName]) {
    const filteredIndividuals = selectedIndividuals?.filter(individual => individual?.[customerIdFieldName] !== customerId)
    setFormData({step3: {individuals: filteredIndividuals}})
  }

  return selectedIndividuals?.length !== 0 ? (
    <div className='bg-slate-100 dark:bg-dark-6 rounded-md flex flex-col p-4 gap-4'>
      <p className='font-medium text-slate-900 dark:text-custom-gray-3'>
        اشخاص انتخاب شده
      </p>

      <div className='flex gap-2 flex-wrap'>
        {selectedIndividuals?.map((individual, index) => {

          const icon = getPersonTypeItem(individual.type)?.icon

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
