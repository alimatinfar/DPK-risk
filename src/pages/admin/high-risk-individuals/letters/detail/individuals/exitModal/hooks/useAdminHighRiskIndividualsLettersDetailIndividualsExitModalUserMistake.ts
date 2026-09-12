import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import type {ExitCustomerFormDataType} from "../index.types.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";
import {exitByUserMistakeDescriptionFieldName} from "../index.constances.ts";
import toastPromise from "../../../../../../../../utils/toastPromise.ts";


type BodyDataType = {
  riskCustomerId: number;
  description: string;
}

function useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake(
  {
    modalState, onClose, refetch
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps,
    'modalState' | 'onClose' | 'refetch'
  >
) {

  const {
    mutate, isPending
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
        toastPromise().then(toast => toast.success('خروج کاربر با موفقیت انجام شد'))
        refetch()
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    exitCustomerByUserMistake, exitCustomerByUserMistakeLoading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsExitModalUserMistake;
