import {expireDateFieldName, type ExpireDateFieldType} from "../../../FormFields/ExpireDateField/index.constances.ts";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../../FormFields/EntryReasonsField/index.constances.ts";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";

export type AdminHighRiskIndividualsFormStep4PrevType = {
  [expireDateFieldName]: ExpireDateFieldType;
  [entryReasonsFieldName]: EntryReasonsFieldType;
}

export type AdminHighRiskIndividualsFormStep4PrevPersonDataType = {
  [customerIdFieldName]: ResultPersonCardDataType[typeof customerIdFieldName];
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
} & AdminHighRiskIndividualsFormStep4PrevType
