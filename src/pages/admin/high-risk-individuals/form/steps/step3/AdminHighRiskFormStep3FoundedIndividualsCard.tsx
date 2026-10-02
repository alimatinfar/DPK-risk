import useResultPersonCategoryFields from "../../../../../search/result/hooks/useResultPersonCategoryFields";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import CardTitleValue from "../../../../../../components/others/Card/CardTitleValue";
import Button from "../../../../../../components/Form/Button/Button";
import PlusCircleIcon from "../../../../../../components/svg/PlusCircleIcon";
import {adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel} from "./index.constances";
import Tag from "../../../../../../components/others/Tag/Tag";
import {type AdminHighRiskFormStep3FoundedIndividualsProps} from "./AdminHighRiskFormStep3FoundedIndividuals";
import useAdminHighRiskFormStep3ExistCustomer from "./hooks/useAdminHighRiskFormStep3ExistCustomer.ts";
import type {AdminHighRiskFormStep3ShareProps} from "./AdminHighRiskFormStep3Share.tsx";


type Props = {
  data: ResultPersonCardDataType;
} & Pick<AdminHighRiskFormStep3FoundedIndividualsProps, 'setUserDuplicateModalState' | 'closeUserDuplicateModalHandler'>
  & Pick<AdminHighRiskFormStep3ShareProps, 'formDataStep1' | 'setFormData' | 'individuals' | 'isInquiryHistory'>

function AdminHighRiskFormStep3FoundedIndividualsCard(
  {
    data, setUserDuplicateModalState, closeUserDuplicateModalHandler,
    formDataStep1, setFormData, individuals, isInquiryHistory
  }: Props
) {

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel, data
  })

  const {
    checkExistCustomerLoading, checkExistCustomer
  } = useAdminHighRiskFormStep3ExistCustomer({
    setUserDuplicateModalState, formDataStep1, isInquiryHistory, individuals,
    setFormData, closeUserDuplicateModalHandler
  })

  function addHandler() {
    checkExistCustomer([data])
  }

  const isAdded = individuals.some(item => item?.[customerIdFieldName] === data?.[customerIdFieldName])

  return (
    <div className='rounded-lg border border-slate-200 dark:border-dark-2 flex flex-col overflow-hidden'>
      <div className='bg-slate-100 dark:bg-dark-6 flex items-center justify-between p-2 min-h-12.5'>
        <p className='flex-1'>
          {data.name}
        </p>

        <div>
          {isAdded ? (
            <Tag text='اضافه شده' color='gray'/>
          ) : (
            <Button
              variant='default' color='white'
              rightIcon={<PlusCircleIcon textColor='text-slate-900 dark:text-white'/>}
              size='sm' fullWidth onClick={addHandler} loading={checkExistCustomerLoading}
            >
              افزودن
            </Button>
          )}
        </div>
      </div>

      <div className='p-2 flex flex-col bg-white dark:bg-dark-1 gap-y-2 flex-1'>
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
