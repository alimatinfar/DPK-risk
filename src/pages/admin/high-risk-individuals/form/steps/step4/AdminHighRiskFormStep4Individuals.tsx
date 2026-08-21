import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {customerIdFieldName} from "../../../../../search/result/ResultCard.types";
import getPersonTypeItem from "../../../../../search/form/utils/getPersonTypeItem";
import Tag from "../../../../../../components/others/Tag/Tag";

function AdminHighRiskFormStep4Individuals() {

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)

  return (
    <div className='flex flex-col border-l border-gray-200 w-62.5'>
      {individuals.map((individual, index) => {

        const Icon = getPersonTypeItem(individual?.type)?.icon
        const documentsLength = 3
        const isLast = individuals?.length === index + 1

        return (
          <div
            key={`${index}-${individual?.[customerIdFieldName]}`}
            className={`
              flex flex-col gap-y-2 p-2 hover:bg-gray-100 cursor-pointer duration-200
              ${isLast ? '' : 'border-b border-gray-200'}
            `}
          >
            <div className='flex items-center gap-x-1'>
              {Icon && <Icon textColor='text-gray-500' />}

              <p>
                {individual?.name}
              </p>

              <div className='flex h-full'>
                <span className='bg-accent-saderat h-[5px] w-[5px] rounded-full'></span>
              </div>

              <Tag text={`${documentsLength} مستند`} color='gray' variant='fade' />
            </div>

            <p className='text-sm text-secondary-text'>
              {individual?.[customerIdFieldName]}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default AdminHighRiskFormStep4Individuals;