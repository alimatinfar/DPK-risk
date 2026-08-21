import {expireDateFieldName, type ExpireDateFieldType} from "../../../FormFields/ExpireDateField/index.constances";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../../FormFields/EntryReasonsField/index.constances";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import type {
  AdminHighRiskIndividualsDocumentFormDataType
} from "../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types";

export type AdminHighRiskIndividualsFormStep4Type = {
  [expireDateFieldName]: ExpireDateFieldType;
  [entryReasonsFieldName]: EntryReasonsFieldType;
}

export type AdminHighRiskIndividualsFormStep4PersonDataType = {
  [customerIdFieldName]: ResultPersonCardDataType[typeof customerIdFieldName];
  documentsList: AdminHighRiskIndividualsDocumentFormDataType[];
} & AdminHighRiskIndividualsFormStep4Type