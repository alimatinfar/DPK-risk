import type {
  AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps
} from "./AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import type {ExitCustomerFormDataType} from "./index.types.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import {announceReferenceFieldName} from "../../../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getSelectIdValue from "../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import type {SelectOptionType} from "../../../../../../../components/Form/Select/select-exports.ts";
import {letterNumberFieldName} from "../../../../FormFields/LetterNumberField/index.constances.ts";
import getBodyDataDateField from "../../../../../../../request/utils/getBodyDataDateField.ts";
import {letterDateFieldName} from "../../../../FormFields/LetterDateField/index.constances.ts";
import {exitCitingTheLetterDescriptionFieldName} from "./index.constances.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import {fileTypeFieldName} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";


type BodyDataType = {
  riskLetter: {
    letterRef: SelectOptionType['id'] | null;
    letterNo: string;
    letterDate: number | string;
    description: string;
    documents: {
      documentType: SelectOptionType['id'] | null;
      name: string;
      description: string;
      content: string;
    }[]
  },
  riskCustomerId: number;
}

type Props = {
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
} & Pick<AdminHighRiskIndividualsLettersDetailIndividualsExitModalProps,
  'modalState' | 'onClose'
>

function useAdminHighRiskIndividualsLettersDetailIndividualsExitModalByLetter(
  {
    modalState, onClose, documentsList
  }: Props
) {

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EXIT_BY_LETTER, method: 'POST'
    }
  })

  function exitCustomerByLetter(formData: ExitCustomerFormDataType) {

    const bodyData: BodyDataType = {
      riskCustomerId: Number(modalState),
      riskLetter: {
        letterRef: getSelectIdValue(formData?.[announceReferenceFieldName]),
        letterNo: formData?.[letterNumberFieldName],
        letterDate: getBodyDataDateField(formData?.[letterDateFieldName]),
        description: formData?.[exitCitingTheLetterDescriptionFieldName],
        documents: documentsList.map(document => ({
          documentType: getSelectIdValue(document?.[fileTypeFieldName]),
          name: '',
          description: document?.[descriptionFieldName],
          content: document?.[uploadFileFieldName]?.data,
        }))
      }
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    exitCustomerByLetter, exitCustomerByLetterLoading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsExitModalByLetter;
