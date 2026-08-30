import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import type {ExitCustomerFormDataType} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";
import {exitByUserMistakeDescriptionFieldName} from "../index.constances.ts";


type BodyDataType = {
  riskCustomerId: number;
  description: string;
}

function useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake(
  {
    modalState, onClose
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps,
    'modalState' | 'onClose'
  >
) {

  const {
    mutate, data, error, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EXIT_BY_USER_MISTAKE, method: 'POST'
    }
  })

  function exitCustomerByUserMistake(formData: ExitCustomerFormDataType) {

    const bodyData: BodyDataType = {
      riskCustomerId: Number(modalState),
      description: formData?.[exitByUserMistakeDescriptionFieldName]
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    exitCustomerByUserMistake
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake;
