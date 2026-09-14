import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {ResultCardDataTypeShareFields} from "../../../../../../search/result/ResultCard.types.ts";
import type {
  AdminHighRiskFormStep3ExistCustomerBodyDataType,
  AdminHighRiskFormStep3ExistCustomerResponseItemType
} from "../index.types.ts";
import type {CustomResponseType} from "../../../../../../../request/types/CustomResponseType.ts";
import getSelectIdValue from "../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {announceReferenceFieldName} from "../../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import type {AdminHighRiskFormStep3FoundedIndividualsProps} from "../AdminHighRiskFormStep3FoundedIndividuals.tsx";
import type {AdminHighRiskFormStep3ShareProps} from "../AdminHighRiskFormStep3Share.tsx";


type Props = Pick<AdminHighRiskFormStep3FoundedIndividualsProps, 'setUserDuplicateModalState' | 'closeUserDuplicateModalHandler'>
  & Pick<AdminHighRiskFormStep3ShareProps, 'formDataStep1' | 'setFormData' | 'individuals'>

function useAdminHighRiskFormStep3ExistCustomer(
  {
    setUserDuplicateModalState, formDataStep1, setFormData, individuals,
    closeUserDuplicateModalHandler
  }: Props
) {

  const {
    mutate, isPending
  } = useMutateData<AdminHighRiskFormStep3ExistCustomerResponseItemType[], AdminHighRiskFormStep3ExistCustomerBodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER, method: 'POST'
    }
  })

  function setIndividualInFormDataHandler(newIndividuals) {
    setFormData({
      step3: {
        individuals: [
          ...individuals,
          // data
        ]
      }
    })
    closeUserDuplicateModalHandler()
  }

  function checkExistCustomer(customerIds: ResultCardDataTypeShareFields['customerId'][]) {
    mutate(customerIds, {
      onSuccess: (response, variables, onMutateResult, context) => {
        const data = (response as CustomResponseType<AdminHighRiskFormStep3ExistCustomerResponseItemType[]>)?.data
        const selectedReferenceId = getSelectIdValue(formDataStep1?.[announceReferenceFieldName])
        const userIsDuplicate = data?.some(item => item?.letterRef === selectedReferenceId)
        userIsDuplicate ? setUserDuplicateModalState({callback: () => setIndividualInFormDataHandler}) : setIndividualInFormDataHandler()
      },
    })
  }

  return {
    checkExistCustomer, checkExistCustomerLoading: isPending
  }
}

export default useAdminHighRiskFormStep3ExistCustomer;
