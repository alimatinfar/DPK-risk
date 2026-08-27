import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";

export type AdminHighRiskIndividualsLettersDetailDocumentType = {
  id: string | number;
} & AdminHighRiskIndividualsDocumentFormDataType

export type AdminHighRiskIndividualsLettersDetailResponseType = {
  id: number;
  letterRef: number;
  letterRefTitle: string;
  letterNo: string;
  letterDate: number;
  description: string;
  documents: [];
  isOut: boolean;
}
