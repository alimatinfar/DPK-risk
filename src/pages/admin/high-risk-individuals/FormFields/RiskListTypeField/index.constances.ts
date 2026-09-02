import type {SelectOptionType} from "../../../../../components/Form/Select/select-exports.ts";

export const riskListTypeFieldName = 'riskListType'
export const riskListTypeFieldLabel = 'نوع لیست'
export type RiskListTypeFieldType = SelectOptionType | '';

export const RISK_LIST_OPTIONS: SelectOptionType[] = [
  {
    id: 1, name: 'آپشن شماره 1',
  },
  {
    id: 2, name: 'آپشن شماره 2',
  },
  {
    id: 3, name: 'آپشن شماره 3',
  },
]
