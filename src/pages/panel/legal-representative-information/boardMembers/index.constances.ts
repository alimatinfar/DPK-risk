import type { TableColumnType } from "../../../../components/others/Table/TableExports.ts";


export const PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS = {
  CUSTOMER_NUMBER: 'customerNumber',
  PERSON_TYPE: 'personType',
  NATIONALITY: 'nationality',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  NATIONAL_CODE_OR_FOREIGN_ID: 'nationalCodeOrForeignId',
  COMPANY_OR_INSTITUTE_NAME: 'companyOrInstituteName',
  NATIONAL_ID: 'nationalId',
  BOARD_POSITION: 'boardPosition',
  BOARD_START_DATE: 'boardStartDate',
  BOARD_END_DATE: 'boardEndDate',
} as const;

export const PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره مشتری',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER,
  },
  {
    label: 'نوع شخصیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.PERSON_TYPE,
  },
  {
    label: 'ملیت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONALITY,
  },
  {
    label: 'نام',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.FIRST_NAME,
  },
  {
    label: 'نام خانوادگی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.LAST_NAME,
  },
  {
    label: 'کدملی/شناسه فراگیر اتباع',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONAL_CODE_OR_FOREIGN_ID,
  },
  {
    label: 'نام شرکت/موسسه',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.COMPANY_OR_INSTITUTE_NAME,
  },
  {
    label: 'شناسه ملی',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID,
  },
  {
    label: 'سمت در هیئت',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_POSITION,
  },
  {
    label: 'تاریخ آغاز هیئت مدیره',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_START_DATE,
  },
  {
    label: 'تاریخ پایان هیئت مدیره',
    accessor: PANEL_LEGAL_REPRESENTATIVE_BOARD_MEMBERS_TABLE_COLUMNS_KEYS.BOARD_END_DATE,
  },
];