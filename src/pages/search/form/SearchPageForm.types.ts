import {
  accountNumberFieldName,
  type AccountNumberFieldType
} from "./formFields/AccountNumberField/AccountNumberField.constances.ts";
import {
  customerNumberFieldName,
  type CustomerNumberFieldType
} from "./formFields/CustomerNumberField/CustomerNumberField.constances.ts";
import {
  cardNumberFieldName, type CardNumberFieldType,
} from "./formFields/CardNumberField/CardNumberField.constances.ts";
import {
  shahabNumberFieldName,
  type ShahabNumberFieldType
} from "./formFields/ShahabNumberField/ShahabNumberField.constances.ts";

export type SearchPageFormDataType = {
  [accountNumberFieldName]: AccountNumberFieldType;
  [customerNumberFieldName]: CustomerNumberFieldType;
  [cardNumberFieldName]: CardNumberFieldType;
  [shahabNumberFieldName]: ShahabNumberFieldType;
}