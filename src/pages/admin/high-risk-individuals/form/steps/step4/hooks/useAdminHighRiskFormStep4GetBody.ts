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

function useAdminHighRiskFormStep4GetBody() {

  const formData = useAdminHighRiskIndividualsFormStore(state => state.formData)
  console.log({formData})

  function getBodyData(): AdminHighRiskFormBodyDataType {
    const step1Data = formData.step1
    const step2Data = formData.step2

    return {
      riskLetter: {
        letterRef: getSelectIdValue(step1Data?.[announceReferenceFieldName]),
        letterNo: step1Data?.[letterNumberFieldName],
        letterDate: getBodyDataDateField(step1Data?.[letterDateFieldName]),
        description: step1Data?.[descriptionFieldName],
        documents: getHighRiskDocumentsBodyData(step2Data?.documentsList)
      },
      riskCustomers: [
        // {
        //   customerId: '',
        //   resonList: '',
        //   resons: '',
        //   validityDate: '',
        //   documents: [
        //     {
        //       documentType: '',
        //       name: '',
        //       description: '',
        //       content: '',
        //     }
        //   ]
        // }
      ],
      checkRepeat: false,
    }
  }

  return {
    getBodyData
  }
}

export default useAdminHighRiskFormStep4GetBody;
