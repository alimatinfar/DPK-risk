import type { TableColumnType} from "../../../../../components/others/Table/TableExports.ts";

export const PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  NATIONAL_CODE_OR_FOREIGN_ID: 'nationalCodeOrForeignId',
  RELATION: 'relation',
  NATIONALITY: 'nationality',
  DOCUMENT_TYPE: 'documentType',
  DOCUMENT_NUMBER_OR_CERTIFICATE_NUMBER: 'documentNumberOrCertificateNumber',
  AUTHENTICATION_CODE: 'authenticationCode',
  ISSUING_AUTHORITY: 'issuingAuthority',
  PLACE_OF_ISSUE: 'placeOfIssue',
  ISSUE_DATE: 'issueDate',
  EXPIRATION_DATE: 'expirationDate',
} as const;


export const PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نام',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.FIRST_NAME,
  },
  {
    label: 'نام خانوادگی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.LAST_NAME,
  },
  {
    label: 'کد ملی/شناسه فراگیر اتباع',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID,
  },
  {
    label: 'نسبت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.RELATION,
  },
  {
    label: 'ملیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.NATIONALITY,
  },
  {
    label: 'نوع سند',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_TYPE,
  },
  {
    label: 'شماره سند/گواهی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.DOCUMENT_NUMBER_OR_CERTIFICATE_NUMBER,
  },
  {
    label: 'رمز تصدیق',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.AUTHENTICATION_CODE,
  },
  {
    label: 'مرجع صادرکننده',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUING_AUTHORITY,
  },
  {
    label: 'محل صدور',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.PLACE_OF_ISSUE,
  },
  {
    label: 'تاریخ صدور',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.ISSUE_DATE,
  },
  {
    label: 'تاریخ انقضا',
    accessor: PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS_KEYS.EXPIRATION_DATE,
  },
]