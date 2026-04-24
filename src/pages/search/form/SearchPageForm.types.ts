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
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "./SearchPageForm.constances.ts";
import {
  birthCertificationNumberFieldName, type BirthCertificationNumberFieldType
} from "./formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  firstNameFieldName,
  type FirstNameFieldType
} from "./formFields/natural/FirstNameField/FirstNameField.constances.ts";
import {
  lastNameFieldName,
  type LastNameFieldType
} from "./formFields/natural/LastNameField/LastNameField.constances.ts";
import {
  nationalCodeFieldName,
  type NationalCodeFieldType
} from "./formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  legalBrandNameFieldName,
  type LegalBrandNameFieldType
} from "./formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalCustomerNameFieldName, type LegalCustomerNameFieldType
} from "./formFields/legal/LegalCustomerNameField/LegalCustomerNameField.constances.ts";
import {
  legalRegistrationNumberFieldName, type LegalRegistrationNumberFieldType
} from "./formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  legalTypeFieldName,
  type LegalTypeFieldType
} from "./formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import {
  registrationDateFromFieldName, type registrationDateFromFieldType
} from "./formFields/legal/RegistrationDateFromField/RegistrationDateFromField.constances.ts";
import {
  registrationDateToFieldName, type registrationDateToFieldType
} from "./formFields/legal/RegistrationDateToField/RegistrationDateToField.constances.ts";

export type SearchPageFormDataType = {
  [accountNumberFieldName]: AccountNumberFieldType;
  [customerNumberFieldName]: CustomerNumberFieldType;
  [cardNumberFieldName]: CardNumberFieldType;
  [shahabNumberFieldName]: ShahabNumberFieldType;

  //natural fields
  [birthCertificationNumberFieldName]: BirthCertificationNumberFieldType;
  [firstNameFieldName]: FirstNameFieldType;
  [lastNameFieldName]: LastNameFieldType;
  [nationalCodeFieldName]: NationalCodeFieldType;

  //legal fields
  [legalBrandNameFieldName]: LegalBrandNameFieldType;
  [legalCustomerNameFieldName]: LegalCustomerNameFieldType;
  [legalRegistrationNumberFieldName]: LegalRegistrationNumberFieldType;
  [legalTypeFieldName]: LegalTypeFieldType;
  [registrationDateFromFieldName]: registrationDateFromFieldType;
  [registrationDateToFieldName]: registrationDateToFieldType;

  //foreign citizen fields
}

export type SearchPageFormPersonType =
  typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS[keyof typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS]['name']