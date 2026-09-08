import type {AdminHighRiskFormBodyDataType} from "../index.types.ts";
import {useAdminHighRiskIndividualsFormStore} from "../../../store/useAdminHighRiskIndividualsFormStore.ts";
import {announceReferenceFieldName} from "../../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectIdValue from "../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {letterNumberFieldName} from "../../../../FormFields/LetterNumberField/index.constances.ts";
import getBodyDataDateField from "../../../../../../../request/utils/getBodyDataDateField.ts";
import {letterDateFieldName} from "../../../../FormFields/LetterDateField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";
import getHighRiskDocumentsBodyData
  from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/utils/getHighRiskDocumentsBodyData.ts";
import {riskListTypeFieldName} from "../../../../FormFields/RiskListTypeField/index.constances.ts";
import {customerIdFieldName} from "../../../../../../search/result/ResultCard.types.ts";

function useAdminHighRiskFormStep4GetBody() {

  const formData = useAdminHighRiskIndividualsFormStore(state => state.formData)

  async function getBodyData(): Promise<AdminHighRiskFormBodyDataType> {
    const step1Data = formData.step1
    const step2Data = formData.step2
    const step3Data = formData.step3

    return {
      riskLetter: {
        letterRef: getSelectIdValue(step1Data?.[announceReferenceFieldName]),
        riskListType: getSelectIdValue(step1Data?.[riskListTypeFieldName]),
        letterNo: step1Data?.[letterNumberFieldName],
        letterDate: getBodyDataDateField(step1Data?.[letterDateFieldName]),
        description: step1Data?.[descriptionFieldName],
        documents: await getHighRiskDocumentsBodyData(step2Data?.documentsList)
      },
      riskCustomers: step3Data?.individuals?.map(item => ({
        customerId: item?.[customerIdFieldName]
      })),
      checkRepeat: false,
    }
  }

  return {
    getBodyData
  }
}

export default useAdminHighRiskFormStep4GetBody;
