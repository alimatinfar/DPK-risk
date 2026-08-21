import {useAdminHighRiskIndividualsFormStore} from "../../store/useAdminHighRiskIndividualsFormStore";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import getPersonTypeItem from "../../../../../search/form/utils/getPersonTypeItem";
import Tag from "../../../../../../components/others/Tag/Tag";
import type {AdminHighRiskIndividualsFormStep4PersonDataType} from "./index.types";


type Props = {
  activePerson: ResultPersonCardDataType['customerId'] | undefined;
  setActivePerson: (value: ResultPersonCardDataType['customerId'] | undefined) => void;
  checkExtraDataIsCompleted: (extraData: AdminHighRiskIndividualsFormStep4PersonDataType) => boolean
}

function AdminHighRiskFormStep4Individuals(
  {activePerson, setActivePerson, checkExtraDataIsCompleted}: Props
) {

  const individuals = useAdminHighRiskIndividualsFormStore(state => state.formData.step3.individuals)
  const individualsExtraData = useAdminHighRiskIndividualsFormStore(state => state.formData.step4.individualsExtraData)

  return (
    <div className='flex flex-col border-l border-gray-200 w-62.5'>
      {individuals.map((individual, index) => {

        const customerId = individual?.[customerIdFieldName]
        const extraData = individualsExtraData?.find(item => {
          return item?.[customerIdFieldName] === customerId
        })
        const Icon = getPersonTypeItem(individual?.type)?.icon
        const documentsLength = extraData?.documentsList?.length
        const isLast = individuals?.length === index + 1
        const isActive = activePerson === customerId
        const extraDataIsCompleted = checkExtraDataIsCompleted(extraData)
        console.log({extraDataIsCompleted})


        return (
          <div
            key={`${index}-${customerId}`}
            onClick={isActive ? null : () => setActivePerson(customerId)}
            className={`
              flex flex-col gap-y-2 p-2 duration-200
              ${isLast ? '' : 'border-b border-gray-200'} 
              ${isActive ? 'bg-gray-100' : 'hover:bg-gray-100 cursor-pointer'}
            `}
          >
            <div className='flex items-center gap-x-1'>
              {Icon && <Icon textColor='text-gray-500'/>}

              <p>
                {individual?.name}
              </p>

              {extraDataIsCompleted ? null : (
                <div className='flex h-full'>
                  <span className='bg-accent-saderat h-[5px] w-[5px] rounded-full'></span>
                </div>
              )}

              {documentsLength ? (
                <Tag text={`${documentsLength} مستند`} color='gray' variant='fade'/>
              ) : null}
            </div>

            <p className='text-sm text-secondary-text'>
              {customerId}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default AdminHighRiskFormStep4Individuals;