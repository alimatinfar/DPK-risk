import type {TableColumnType} from "../../../components/others/Table/TableExports.ts";
import ACTIONS_COLUMN from "../../../components/others/Table/constances/actions/actionsColumn.ts";
import Tag from "../../../components/others/Tag/Tag.tsx";
import type {AdminInquiryHistoriesFilterType} from "./index.types.ts";
import {inquiryNumberFieldName} from "./FormFields/InquiryNumberField/index.constances.ts";
import {
  announceReferenceFieldName,
} from "../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterNumberFieldName,
} from "../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import {requestReasonFieldName} from "./FormFields/RequestReasonField/index.constances.ts";
import {customerNameFieldName} from "./FormFields/CustomerNameField/index.constances.ts";
import {
  nationalCodeFieldName,
} from "../high-risk-individuals/FormFields/NationalCodeField/index.constances.ts";
import {
  letterFromDateFieldName,
} from "../high-risk-individuals/FormFields/LetterFromDateField/index.constances.ts";
import {
  letterToDateFieldName,
} from "../high-risk-individuals/FormFields/LetterToDateField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
} from "./FormFields/ResponseSubmissionStatusField/index.constances.ts";

export const ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS = {
  INQUIRY_NUMBER: 'inquiryNumber',
  REQUESTER: 'requester',
  REQUEST_REASON: 'requestReason',
  LETTER_NUMBER: 'letterNumber',
  CUSTOMER_COUNT: 'customerCount',
  STATUS: 'status',
} as const;

export const ADMIN_INQUIRY_HISTORIES_COLUMNS: TableColumnType[] = [
  {
    label: 'شماره استعلام',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.INQUIRY_NUMBER,
  },
  {
    label: 'مرجع درخواست کننده',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUESTER,
  },
  {
    label: 'علت درخواست',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUEST_REASON,
  },
  {
    label: 'شماره نامه',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER,
  },
  {
    label: 'تعداد مشتری',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.CUSTOMER_COUNT,
  },
  {
    label: 'وضعیت',
    accessor: ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.STATUS,
  },
  ACTIONS_COLUMN,
];

export const adminInquiryHistoriesDefaultFilters: AdminInquiryHistoriesFilterType = {
  [inquiryNumberFieldName]: '',
  [announceReferenceFieldName]: '',
  [letterNumberFieldName]: '',
  [requestReasonFieldName]: '',
  [customerNameFieldName]: '',
  [nationalCodeFieldName]: '',
  [letterFromDateFieldName]: '',
  [letterToDateFieldName]: '',
  [responseSubmissionStatusFieldName]: '',
}

export const ADMIN_INQUIRY_HISTORIES_FAKE_DATA = [
  {
    id: 1,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.INQUIRY_NUMBER]: '100245',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUESTER]: 'واحد مبارزه با پولشویی',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUEST_REASON]: 'بررسی تراکنش‌های مشکوک',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER]: '1405/1258',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.CUSTOMER_COUNT]: 24,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.STATUS]: (
      <Tag text='ارسال شده' color='green' variant='fade' />
    ),
  },
  {
    id: 2,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.INQUIRY_NUMBER]: '100246',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUESTER]: 'اداره حقوقی',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUEST_REASON]: 'بررسی سوابق مشتریان',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER]: '1405/1324',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.CUSTOMER_COUNT]: 12,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.STATUS]: (
      <Tag text='ارسال نشده' color='red' variant='fade' />
    ),
  },
  {
    id: 3,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.INQUIRY_NUMBER]: '100247',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUESTER]: 'معاونت اعتباری',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUEST_REASON]: 'بررسی وضعیت اعتباری مشتری',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER]: '1405/1412',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.CUSTOMER_COUNT]: 37,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.STATUS]: (
      <Tag text='ارسال شده' color='green' variant='fade' />
    ),
  },
  {
    id: 4,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.INQUIRY_NUMBER]: '100248',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUESTER]: 'واحد بازرسی',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.REQUEST_REASON]: 'بررسی اطلاعات مشتریان',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.LETTER_NUMBER]: '1405/1498',
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.CUSTOMER_COUNT]: 8,
    [ADMIN_INQUIRY_HISTORIES_COLUMNS_KEYS.STATUS]: (
      <Tag text='ارسال نشده' color='red' variant='fade' />
    ),
  },
];
