import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";
import type {
  HighRiskDocumentsBodyDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/utils/getHighRiskDocumentsBodyData.ts";

export type AdminHighRiskFormBodyDataType = {
  riskLetter: {
    letterRef: SelectOptionType['id'] | null;
    letterNo: string;
    letterDate: string | number;
    description: string;
    documents: HighRiskDocumentsBodyDataType;
  };
  riskCustomers: {
    customerId: number;
    resonList: SelectOptionType['id'][],
    resons: string;
    validityDate: number;
    documents: HighRiskDocumentsBodyDataType;
  }[];
  checkRepeat: boolean;
}
