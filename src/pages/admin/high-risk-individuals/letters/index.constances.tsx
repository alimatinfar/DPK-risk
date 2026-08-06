import type {TableColumnType} from "../../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../../components/others/Table/constances/actions/actionsColumn.ts";
import type {AdminHighRiskIndividualsLettersFilterType} from "./index.types.ts";
import type {FilterType} from "../../../../components/Form/FilterForm/index.types.ts";


export const ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS = {
  LETTER_NUMBER: 'letterNumber',
  ANNOUNCER_REFERENCE: 'announcerReference',
  LETTER_DATE: 'letterDate',
} as const;

export const ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره نامه',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER,
  },
  {
    label: 'مرجع اعلام کننده',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE,
  },
  {
    label: 'تاریخ نامه',
    accessor: ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE,
  },
  ACTIONS_COLUMN
];

export const ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_FAKE_DATA = [
  {
    id: 1,
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER]: '32654984651',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE]: 'قوه قضائیه',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE]: '1403/02/10',
  },
  {
    id: 2,
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER]: '32654984651',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE]: 'قوه قضائیه',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE]: '1403/02/10',
  },
  {
    id: 3,
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_NUMBER]: '32654984651',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.ANNOUNCER_REFERENCE]: 'قوه قضائیه',
    [ADMIN_HIGH_RISK_INDIVIDUAL_LETTERS_TABLE_COLUMNS_KEYS.LETTER_DATE]: '1403/02/10',
  },
];

export const adminHighRiskIndividualsLettersDefaultFilters: FilterType<AdminHighRiskIndividualsLettersFilterType> = {
  data: {},
  currentPage: 1,
  rowsPerPage: 10,
}
