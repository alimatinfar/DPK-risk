import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import ROUTER_LINKS from "../../../../../../../constances/routerLinks.ts";
import toastPromise from "../../../../../../../utils/toastPromise.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {SelectOptionType} from "../../../../../../../components/Form/Select/select-exports.ts";
import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../../../../FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";
import {announceReferenceFieldName} from "../../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectIdValue from "../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {letterNumberFieldName} from "../../../../FormFields/LetterNumberField/index.constances.ts";


type BodyDataType = {
  LetterRef: SelectOptionType['id'] | null;
  LetterNo: number | string;
}

function useAdminHighRiskFormStep1ExistLetter() {

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    dataInParams: true,
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_EXIST_LETTER, method: 'GET'
    }
  })

  async function checkExistLetter(formData: AdminHighRiskIndividualsBaseFormFieldsType) {
    return new Promise((resolve) => {
      const bodyData: BodyDataType = {
        LetterRef: getSelectIdValue(formData?.[announceReferenceFieldName]),
        LetterNo: formData?.[letterNumberFieldName]
      }

      mutate(bodyData, {
        onSuccess: (data, variables, onMutateResult, context) => {
          resolve(data)
        },
        ...fireResponseErrorToast()
      })
    })
  }

  return {
    checkExistLetter, checkExistLetterLoading: isPending
  }
}

export default useAdminHighRiskFormStep1ExistLetter;
