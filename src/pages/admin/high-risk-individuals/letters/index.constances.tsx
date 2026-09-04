import type {TableColumnType} from "../../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../../components/others/Table/constances/actions/actionsColumn.ts";
import type {AdminHighRiskIndividualsLettersFilterType} from "./index.types.ts";
import {
  letterNumberFieldLabel,
  letterNumberFieldName,
} from "../FormFields/LetterNumberField/index.constances.ts";
import {
  announceReferenceFieldLabel,
  announceReferenceFieldName,
} from "../FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterFromDateFieldName,
} from "../FormFields/LetterFromDateField/index.constances.ts";
import {letterToDateFieldName} from "../FormFields/LetterToDateField/index.constances.ts";
import {riskListTypeFieldLabel, riskListTypeFieldName} from "../FormFields/RiskListTypeField/index.constances.ts";
import {letterDateFieldLabel} from "../FormFields/LetterDateField/index.constances.ts";


export const ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS = {
  LETTER_NUMBER: 'letterNumber',
  ANNOUNCER_REFERENCE: 'announcerReference',
  LETTER_DATE: 'letterDate',
  LIST_TYPE: 'listType',
} as const;

export const ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: letterNumberFieldLabel,
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER,
  },
  {
    label: announceReferenceFieldLabel,
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE,
  },
  {
    label: letterDateFieldLabel,
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE,
  },
  {
    label: riskListTypeFieldLabel,
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LIST_TYPE,
  },
  ACTIONS_COLUMN
];

export const adminHighRiskIndividualsLettersDefaultFilters: AdminHighRiskIndividualsLettersFilterType = {
  [letterNumberFieldName]: '',
  [announceReferenceFieldName]: '',
  [letterFromDateFieldName]: undefined,
  [letterToDateFieldName]: undefined,
  [riskListTypeFieldName]: '',
}
