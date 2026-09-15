import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {
  customerIdFieldName,
  type ResultCardDataTypeShareFields,
} from "../../../../../../search/result/ResultCard.types.ts";
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
  & Pick<AdminHighRiskFormStep3ShareProps, 'formDataStep1' | 'setFormData' | 'individuals' | 'isInquiryHistory'>

function useAdminHighRiskFormStep3ExistCustomer(
  {
    setUserDuplicateModalState, formDataStep1, setFormData, individuals,
    closeUserDuplicateModalHandler, isInquiryHistory
  }: Props
) {

  const {
    mutate, isPending
  } = useMutateData<AdminHighRiskFormStep3ExistCustomerResponseItemType[], AdminHighRiskFormStep3ExistCustomerBodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_CUSTOMER, method: 'POST',
      // params: {letterRef: getSelectIdValue(formDataStep1?.[announceReferenceFieldName])}
    }
  })

  function setIndividualInFormDataHandler(newIndividuals: ResultCardDataTypeShareFields[]) {
    setFormData({
      step3: {
        individuals: [
          ...individuals,
          ...newIndividuals
        ]
      }
    })
    closeUserDuplicateModalHandler()
  }

  function checkExistCustomer(dataList: ResultCardDataTypeShareFields[]) {
    return new Promise(function (resolve, reject) {
      const setDataHandler = () => setIndividualInFormDataHandler(dataList)

      if (isInquiryHistory) {
        setDataHandler()
        resolve(null)
      } else {
        const customerIds = dataList?.map(item => item?.[customerIdFieldName])

        mutate(customerIds, {
          onSuccess: (response, variables, onMutateResult, context) => {
            const data = (response as CustomResponseType<AdminHighRiskFormStep3ExistCustomerResponseItemType[]>)?.data
            const userIsDuplicate = !!data?.length
            userIsDuplicate ? setUserDuplicateModalState({
              callback: () => setDataHandler,
              users: response?.data?.map(item => item?.description)
            }) : setDataHandler()
            resolve(null)
          },
          onError: reject
        })
      }
    })
  }

  return {
    checkExistCustomer, checkExistCustomerLoading: isPending
  }
}

export default useAdminHighRiskFormStep3ExistCustomer;
