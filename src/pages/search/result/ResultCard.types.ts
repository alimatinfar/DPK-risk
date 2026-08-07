import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import {nationalCodeFieldName} from "../form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  birthCertificationNumberFieldName
} from "../form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {nationalityFieldName} from "../form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {citizenshipFieldName} from "../form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {legalBrandNameFieldName} from "../form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {legalTypeFieldName} from "../form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";

export type ResultCardDataTypeNatural = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name;
  [nationalCodeFieldName]: string;
  [birthCertificationNumberFieldName]: string;
}

export type ResultCardDataTypeForeignCitizen = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name;
  [comprehensiveForeignNationalsIdFieldName]: string;
  [nationalityFieldName]: string;
  [citizenshipFieldName]: string;
}

export type ResultCardDataTypeLegal = {
  type: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name;
  [legalBrandNameFieldName]: string;
  [legalRegistrationNumberFieldName]: string;
  [legalTypeFieldName]: string;
}


export const customerIdFieldName = 'customerId'

export type ResultCardDataTypeShareFields = {
  name: string;
  [customerIdFieldName]: string | number;
}

export type ResultCardDataType = ResultCardDataTypeShareFields & (ResultCardDataTypeNatural | ResultCardDataTypeForeignCitizen | ResultCardDataTypeLegal)
