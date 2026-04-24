import {
  accountNumberFieldName,
  type AccountNumberFieldType
} from "./formFields/AccountNumberField/AccountNumberField.constances.ts";

export type SearchPageFormDataType = {
  [accountNumberFieldName]: AccountNumberFieldType
}