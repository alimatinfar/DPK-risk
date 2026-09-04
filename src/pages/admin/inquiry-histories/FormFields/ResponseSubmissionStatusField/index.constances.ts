import type {SelectOptionType} from "../../../../../components/Form/Select/select-exports.ts";

export const responseSubmissionStatusFieldName = 'responseSubmissionStatus'
export const responseSubmissionStatusFieldLabel = 'وضعیت ارسال پاسخ'
export type ResponseSubmissionStatusFieldType = SelectOptionType | '';

export const responseSubmissionStatusFieldOptions = [
  {
    id: 1, name: 'ارسال شده',
  },
  {
    id: 2, name: 'ارسال نشده',
  },
]
