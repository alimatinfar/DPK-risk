import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";
import type {
  HighRiskDocumentsBodyDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/utils/getHighRiskDocumentsBodyData.ts";

export type AdminHighRiskFormBodyDataType = {
  riskLetter: {
    letterRef: SelectOptionType['id'] | null;
    riskListType: SelectOptionType['id'] | null;
    letterNo: string;
    letterDate: string | number | null;
    validityDate: string | number | null;
    description: string;
    documents: HighRiskDocumentsBodyDataType;
  };
  riskCustomers: {
    customerId: number | string;
  }[];
  checkRepeat: boolean;
}
