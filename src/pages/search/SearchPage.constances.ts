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

export const SEARCH_PAGE_FAKE_DATA: SearchPageResultCardDataType[] = [
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'میثم حیدری',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'محمدرضا خدخواه',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حبیب موسوی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حسین مبینی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'علی متین فر',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'میثم حیدری',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'محمدرضا خدخواه',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حبیب موسوی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حسین مبینی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'علی متین فر',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'میثم حیدری',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'محمدرضا خدخواه',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حبیب موسوی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حسین مبینی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'علی متین فر',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'میثم حیدری',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'محمدرضا خدخواه',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حبیب موسوی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حسین مبینی',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'علی متین فر',
    [nationalCodeFieldName]: '123456789',
    [birthCertificationNumberFieldName]: '123456789',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    name: 'دوشنبه سه‌شنبه',
    [comprehensiveForeignNationalsIdFieldName]: '123456789',
    [nationalityFieldName]: 'افغانستان',
    [citizenshipFieldName]: 'آلمان',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    name: 'دوشنبه سه‌شنبه',
    [comprehensiveForeignNationalsIdFieldName]: '123456789',
    [nationalityFieldName]: 'افغانستان',
    [citizenshipFieldName]: 'آلمان',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    name: 'دوشنبه سه‌شنبه',
    [comprehensiveForeignNationalsIdFieldName]: '123456789',
    [nationalityFieldName]: 'افغانستان',
    [citizenshipFieldName]: 'آلمان',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    name: 'دوشنبه سه‌شنبه',
    [comprehensiveForeignNationalsIdFieldName]: '123456789',
    [nationalityFieldName]: 'افغانستان',
    [citizenshipFieldName]: 'آلمان',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },

  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'داده پردازان فن آوازه',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '123456789',
    [legalTypeFieldName]: 'مسئولیت محدود',
  },
]