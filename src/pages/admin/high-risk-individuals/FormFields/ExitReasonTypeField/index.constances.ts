import type {SelectOptionType} from "../../../../../components/Form/Select/select-exports.ts";

export const exitReasonTypeFieldName = 'exitReasonType'
export type ExitReasonTypeFieldType = SelectOptionType | '';

export const EXIT_REASON_TYPE_KEYS = {
  USER_MISTAKE: 1,
  CITING_THE_LETTER: 2,
}

export const exitReasonTypeFieldOptions = [
  {id: EXIT_REASON_TYPE_KEYS.USER_MISTAKE, name: 'خروج به دلیل خطای کاربر'},
  {id: EXIT_REASON_TYPE_KEYS.CITING_THE_LETTER, name: 'خروج با استناد به نامه'},
]
