import type { TableColumnType } from "../../../../components/others/Table/TableExports.ts";


export const PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS = {
  COMPANY_TYPE: 'companyType',
  ACTIVITY_TYPE_OR_FIELD: 'activityTypeOrField',
  ACTIVITY_CLASSIFICATION: 'activityClassification',
  ECONOMIC_CODE: 'economicCode',
  COMMERCIAL_CARD_NUMBER: 'commercialCardNumber',
  DECLARATION_DATE: 'declarationDate',
  FROM_DATE: 'fromDate',
  REGISTRATION_DATE: 'registrationDate',
} as const;


export const PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'نوع شرکت',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.COMPANY_TYPE,
  },
  {
    label: 'نوع فعالیت / حوزه کاری',
    accessor:
    PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ACTIVITY_TYPE_OR_FIELD,
  },
  {
    label: 'طبقه‌بندی فعالیت',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ACTIVITY_CLASSIFICATION,
  },
  {
    label: 'کد اقتصادی',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.ECONOMIC_CODE,
  },
  {
    label: 'شماره کارت بازرگانی',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.COMMERCIAL_CARD_NUMBER,
  },
  {
    label: 'تاریخ اعلام',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.DECLARATION_DATE,
  },
  {
    label: 'از تاریخ',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE,
  },
  {
    label: 'تاریخ ثبت',
    accessor: PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE,
  },
];


