import type {TableColumnType} from "../../../../components/others/Table/TableExports.ts";


export const documentsFieldName = 'documents';

export const RISK_GROUP_REPORT_MODAL_STEPS = {
  UPLOAD: 'upload',
  UPLOAD_ERROR: 'uploadError',
  ERRORS_LIST: 'errorsList',
} as const

export type RiskGroupReportModalStepType =
  typeof RISK_GROUP_REPORT_MODAL_STEPS[keyof typeof RISK_GROUP_REPORT_MODAL_STEPS]

export const UPLOAD_ERROR_MESSAGE =
  'فایل بارگذاری شده حاوی خطا است. لطفاً پس از اصلاح فایل، آن را دوباره بارگذاری کنید.'

export const ERROR_ROW_NUMBER_COLUMN_ACCESSOR = 'rowNumber';
export const ERROR_MESSAGE_COLUMN_ACCESSOR = 'message';

export const ADMIN_RISK_GROUP_REPORT_ERRORS_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره ردیف',
    accessor: ERROR_ROW_NUMBER_COLUMN_ACCESSOR,
    tdWidth: 'w-24',
  },
  {
    label: 'پیام خطا',
    accessor: ERROR_MESSAGE_COLUMN_ACCESSOR,
  },
]
