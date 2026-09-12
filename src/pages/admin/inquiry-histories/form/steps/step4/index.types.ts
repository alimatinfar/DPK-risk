import type {
  HighRiskDocumentsBodyDataType
} from "../../../../high-risk-individuals/FormFields/AdminHighRiskIndividualsDocumentFormFields/utils/getHighRiskDocumentsBodyData.ts";
import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";

export type AdminInquiryHistoryFormBodyDataType = {
  inquiryLetter: {
    letterRef: SelectOptionType['id'] | null;
    reson: SelectOptionType['id'] | null;
    letterNo: string;
    letterDate: string | number | null;
    description: string;
    status: SelectOptionType['id'] | null;
    documents: HighRiskDocumentsBodyDataType
  },
  inquiryCustomers: {
    customerId: number | string;
  }[],
  checkRepeat: boolean;
}
