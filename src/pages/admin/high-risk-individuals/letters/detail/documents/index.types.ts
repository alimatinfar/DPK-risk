import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";

export type AdminHighRiskIndividualsLettersDetailDocumentType = {
  id: string | number;
  fileTokenId: string | number;
} & AdminHighRiskIndividualsDocumentFormDataType

export type AdminHighRiskIndividualsLettersDetailResponseType = {
  baseRiskLetterId: number;
  description: string;
  documents: [];
  id: number;
  isOut: number;
  isOutValidityDate: number;
  letterDate: number;
  letterNo: string;
  letterRef: number;
  letterRefTitle: string;
  riskListType: number;
  riskListTypeTitle: string;
  validityDate: number;
}
