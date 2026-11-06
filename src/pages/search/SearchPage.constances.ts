import {accountNumberFieldName} from "./form/formFields/AccountNumberField/AccountNumberField.constances.ts";
import {customerNumberFieldName} from "./form/formFields/CustomerNumberField/CustomerNumberField.constances.ts";
import {cardNumberFieldName} from "./form/formFields/CardNumberField/CardNumberField.constances.ts";
import {shahabNumberFieldName} from "./form/formFields/ShahabNumberField/ShahabNumberField.constances.ts";
import {nationalCodeFieldName} from "./form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {firstNameFieldName} from "./form/formFields/natural/FirstNameField/FirstNameField.constances.ts";
import {lastNameFieldName} from "./form/formFields/natural/LastNameField/LastNameField.constances.ts";
import {
  birthCertificationNumberFieldName
} from "./form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "./form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {nationalityFieldName} from "./form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {citizenshipFieldName} from "./form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "./form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  legalCustomerNameFieldName
} from "./form/formFields/legal/LegalCustomerNameField/LegalCustomerNameField.constances.ts";
import {legalBrandNameFieldName} from "./form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalAbbreviationFieldName
} from "./form/formFields/legal/LegalAbbreviationField/LegalAbbreviationField.constances.ts";
import {legalTypeFieldName} from "./form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import {
  registrationDateFromFieldName,
  type RegistrationDateFromFieldType
} from "./form/formFields/legal/RegistrationDateFromField/RegistrationDateFromField.constances.ts";
import {
  registrationDateToFieldName,
  type RegistrationDateToFieldType
} from "./form/formFields/legal/RegistrationDateToField/RegistrationDateToField.constances.ts";
import type {SearchPageFormDataType} from "./form/SearchPageForm.types.ts";

export const SEARCH_PAGE_PADDING_X = 'px-25'

export const SEARCH_PAGE_MAX_WIDTH = 'max-w-[1550px] mx-auto'

export const SEARCH_PAGE_INITIAL_FORM_DATA: SearchPageFormDataType = {
  [accountNumberFieldName]: "",
  [customerNumberFieldName]: "",
  [cardNumberFieldName]: "",
  [shahabNumberFieldName]: "",
  [nationalCodeFieldName]: "",
  [firstNameFieldName]: "",
  [lastNameFieldName]: "",
  [birthCertificationNumberFieldName]: "",
  [comprehensiveForeignNationalsIdFieldName]: "",
  [nationalityFieldName]: "",
  [citizenshipFieldName]: "",
  [legalRegistrationNumberFieldName]: "",
  [legalCustomerNameFieldName]: "",
  [legalBrandNameFieldName]: "",
  [legalAbbreviationFieldName]: "",
  [legalTypeFieldName]: "",
  [registrationDateFromFieldName]: '',
  [registrationDateToFieldName]: '',
} as const
