import type {SelectOptionType} from "../../../../../../components/Form/Select/select-exports.ts";

export const legalTypeFieldName = 'legalType'
export const legalTypeFieldLabel = 'نوع حقوقی'
export type LegalTypeFieldType = SelectOptionType | '';

export const LEGAL_TYPE_OPTIONS: SelectOptionType[] = [
  {id: 1, name: 'نوع ۱'},
  {id: 2, name: 'نوع ۲'},
  {id: 3, name: 'نوع ۳'}
]