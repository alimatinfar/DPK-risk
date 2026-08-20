import useResultPersonCategoryFields from "../../../../../search/result/hooks/useResultPersonCategoryFields";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import CardTitleValue from "../../../../../../components/others/Card/CardTitleValue";
import Button from "../../../../../../components/Form/Button/Button";
import PlusCircleIcon from "../../../../../../components/svg/PlusCircleIcon";
import {adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel} from "./index.constances";
import Tag from "../../../../../../components/others/Tag/Tag";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";


type Props = {
  data: ResultPersonCardDataType;
}

function AdminHighRiskFormStep3FoundedIndividualsCard(
  {data}: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel, data
  })

  const selectedIndividuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)

  function addHandler() {
    setFormData({
      step3: {
        individuals: [
          ...selectedIndividuals,
          data
        ]
      }
    })
  }

  const isAdded = selectedIndividuals.some(item => item?.[customerIdFieldName] === data?.[customerIdFieldName])

  return (
    <div className='rounded-lg border border-gray-200 flex flex-col overflow-hidden'>
      <div className='bg-gray-100 flex items-center justify-between p-2 min-h-12.5'>
        <p>
          {data.name}
        </p>

        <div>
          {isAdded ? (
            <Tag text='اضافه شده' color='gray'/>
          ) : (
            <Button
              variant='default' color='white' rightIcon={<PlusCircleIcon textColor='text-gray-900'/>}
              size='sm' fullWidth onClick={addHandler}
            >
              افزودن
            </Button>
          )}
        </div>
      </div>

      <div className='p-2 flex flex-col bg-white gap-y-2'>
        {fields.map(({label, value}, index) => (
          <CardTitleValue
            key={index} label={label} value={value}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminHighRiskFormStep3FoundedIndividualsCard;