import type {SearchPageResultCardDataType} from "./result/SearchPageResult.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "./form/SearchPageForm.constances.ts";
import {nationalCodeFieldName} from "./form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  birthCertificationNumberFieldName
} from "./form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "./form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {nationalityFieldName} from "./form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {citizenshipFieldName} from "./form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {legalBrandNameFieldName} from "./form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "./form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {legalTypeFieldName} from "./form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";

export const SEARCH_PAGE_PADDING_X = 'px-25'

export const SEARCH_PAGE_MAX_WIDTH = 'max-w-[1550px] mx-auto'