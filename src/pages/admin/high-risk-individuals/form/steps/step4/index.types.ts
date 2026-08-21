import {expireDateFieldName, type ExpireDateFieldType} from "../../../FormFields/ExpireDateField/index.constances";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../../FormFields/EntryReasonsField/index.constances";

export type AdminHighRiskIndividualsFormStep4Type = {
  [expireDateFieldName]: ExpireDateFieldType;
  [entryReasonsFieldName]: EntryReasonsFieldType;
}