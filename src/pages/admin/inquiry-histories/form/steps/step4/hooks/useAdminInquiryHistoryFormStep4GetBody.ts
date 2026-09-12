import getSelectIdValue from "../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {
  announceReferenceFieldName
} from "../../../../../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import {useAdminInquiryHistoriesFormStore} from "../../../store/useAdminInquiryHistoriesFormStore.ts";
import type {AdminInquiryHistoryFormBodyDataType} from "../index.types.ts";
import {requestReasonFieldName} from "../../../../FormFields/RequestReasonField/index.constances.ts";
import {
  letterNumberFieldName
} from "../../../../../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import getBodyDataDateField from "../../../../../../../request/utils/getBodyDataDateField.ts";
import {letterDateFieldName} from "../../../../../high-risk-individuals/FormFields/LetterDateField/index.constances.ts";
import {
  descriptionFieldName
} from "../../../../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import {
  responseSubmissionStatusFieldName
} from "../../../../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import getHighRiskDocumentsBodyData
  from "../../../../../high-risk-individuals/FormFields/AdminHighRiskIndividualsDocumentFormFields/utils/getHighRiskDocumentsBodyData.ts";
import {customerIdFieldName} from "../../../../../../search/result/ResultCard.types.ts";

function useAdminInquiryHistoryFormStep4GetBody() {

  const formData = useAdminInquiryHistoriesFormStore(state => state.formData)

  function getBodyData(): AdminInquiryHistoryFormBodyDataType {
    const step1Data = formData.step1
    const step2Data = formData.step2
    const step3Data = formData.step3

    return {
      inquiryLetter: {
        letterRef: getSelectIdValue(step1Data?.[announceReferenceFieldName]),
        reson: getSelectIdValue(step1Data?.[requestReasonFieldName]),
        letterNo: step1Data?.[letterNumberFieldName],
        letterDate: getBodyDataDateField(step1Data?.[letterDateFieldName]),
        description: step1Data?.[descriptionFieldName],
        status: getSelectIdValue(step1Data?.[responseSubmissionStatusFieldName]),
        documents: getHighRiskDocumentsBodyData(step2Data?.documentsList)
      },
      inquiryCustomers: step3Data?.individuals?.map(item => ({
        customerId: item?.[customerIdFieldName]
      })),
      checkRepeat: false
    }
  }

  return {
    getBodyData
  }
}

export default useAdminInquiryHistoryFormStep4GetBody;
