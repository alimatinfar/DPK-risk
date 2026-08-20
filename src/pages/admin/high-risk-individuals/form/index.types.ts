import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import type {ResultPersonCardDataType} from "../../../search/result/ResultCard.types";

export type AdminHighRiskIndividualsFormDataType = {
  currentStep: number;
  step1: AdminHighRiskIndividualsBaseFormFieldsType;
  step2: {
    documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
  };
  step3: {
    individuals: ResultPersonCardDataType[];
  };
}
