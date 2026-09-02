import type {
  AdminHighRiskIndividualsBaseFormFieldsType
} from "../FormFields/AdminHighRiskIndividualsBaseFormFields/index.types.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import type {ResultPersonCardDataType} from "../../../search/result/ResultCard.types";
import {type AdminHighRiskIndividualsFormStep4PrevPersonDataType} from "./steps/step4Prev/index.types.ts";

export type AdminHighRiskIndividualsFormDataType = {
  formIsDirty: boolean;
  currentStep: number;
  step1: AdminHighRiskIndividualsBaseFormFieldsType;
  step2: {
    documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
  };
  step3: {
    individuals: ResultPersonCardDataType[];
  };
  // step4: {
  //   individualsExtraData: AdminHighRiskIndividualsFormStep4PrevPersonDataType[];
  // };
}
