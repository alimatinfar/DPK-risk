import useResultPersonCategoryFields from "../../../../../search/result/hooks/useResultPersonCategoryFields";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import CardTitleValue from "../../../../../../components/others/Card/CardTitleValue";
import Button from "../../../../../../components/Form/Button/Button";
import PlusCircleIcon from "../../../../../../components/svg/PlusCircleIcon";
import {adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel} from "./index.constances";
import Tag from "../../../../../../components/others/Tag/Tag";
import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {type AdminHighRiskFormStep3FoundedIndividualsProps} from "./AdminHighRiskFormStep3FoundedIndividuals";
import useAdminHighRiskFormStep3ExistCustomer from "./hooks/useAdminHighRiskFormStep3ExistCustomer.ts";
import type {CustomResponseType} from "../../../../../../request/types/CustomResponseType.ts";
import type {AdminHighRiskFormStep3ExistCustomerResponseItemType} from "./index.types.ts";
import {announceReferenceFieldName} from "../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectIdValue from "../../../../../../components/Form/Select/utils/getSelectIdValue.ts";


type Props = {
  data: ResultPersonCardDataType;
} & Pick<AdminHighRiskFormStep3FoundedIndividualsProps, 'setUserDuplicateModalState' | 'closeUserDuplicateModalHandler'>

function AdminHighRiskFormStep3FoundedIndividualsCard(
  {data, setUserDuplicateModalState, closeUserDuplicateModalHandler}: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel, data
  })

  const selectedIndividuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const setFormData = useAdminHighRiskIndividualsFormStore(state => state.setFormData)
  const formDataStep1 = useAdminHighRiskIndividualsFormStore(state => state.formData.step1)

  function setIndividualInFormDataHandler() {
    setFormData({
      step3: {
        individuals: [
          ...selectedIndividuals,
          data
        ]
      }
    })
    closeUserDuplicateModalHandler()
  }

  const {
    checkExistCustomerLoading, checkExistCustomer
  } = useAdminHighRiskFormStep3ExistCustomer()

  function addHandler() {
    checkExistCustomer(data?.[customerIdFieldName]).then((response) => {
      const data = (response as CustomResponseType<AdminHighRiskFormStep3ExistCustomerResponseItemType[]>)?.data
      const selectedReferenceId = getSelectIdValue(formDataStep1?.[announceReferenceFieldName])
      const userIsDuplicate = data?.some(item => item?.letterRef === selectedReferenceId)
      userIsDuplicate ? setUserDuplicateModalState(() => setIndividualInFormDataHandler) : setIndividualInFormDataHandler()
      console.log({data, selectedReferenceId, userIsDuplicate})
    })
  }

  const isAdded = selectedIndividuals.some(item => item?.[customerIdFieldName] === data?.[customerIdFieldName])

  return (
    <div className='rounded-lg border border-gray-200 flex flex-col overflow-hidden'>
      <div className='bg-gray-100 flex items-center justify-between p-2 min-h-12.5'>
        <p className='flex-1'>
          {data.name}
        </p>

        <div>
          {isAdded ? (
            <Tag text='اضافه شده' color='gray'/>
          ) : (
            <Button
              variant='default' color='white' rightIcon={<PlusCircleIcon textColor='text-gray-900'/>}
              size='sm' fullWidth onClick={addHandler} loading={checkExistCustomerLoading}
            >
              افزودن
            </Button>
          )}
        </div>
      </div>

      <div className='p-2 flex flex-col bg-white gap-y-2 flex-1'>
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
