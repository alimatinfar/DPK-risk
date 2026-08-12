import type {AdminHighRiskIndividualsFilterType} from "./index.types.ts";
import {nationalCodeFieldName} from "../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName} from "../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName} from "../FormFields/LastNameField/index.constances.ts";
import {customerIdFieldName, type ResultPersonCardDataType} from "../../../search/result/ResultCard.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../search/form/SearchPageForm.constances.ts";
import {
  birthCertificationNumberFieldLabel,
  birthCertificationNumberFieldName
} from "../../../search/form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldLabel,
  comprehensiveForeignNationalsIdFieldName
} from "../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalityFieldLabel,
  nationalityFieldName
} from "../../../search/form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {
  citizenshipFieldLabel,
  citizenshipFieldName
} from "../../../search/form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalBrandNameFieldLabel,
  legalBrandNameFieldName
} from "../../../search/form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldLabel,
  legalRegistrationNumberFieldName
} from "../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  legalTypeFieldLabel,
  legalTypeFieldName
} from "../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {SearchPageFormPersonType} from "../../../search/form/SearchPageForm.types.ts";
import {
  nationalCodeFieldLabel
} from "../../../search/form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {searchPageResultCardSeparatedFieldsNameLabel} from "../../../search/result/SearchPageResultCard.constances.ts";
import {
  customerNumberFieldLabel,
  customerNumberFieldName
} from "../../../search/form/formFields/CustomerNumberField/CustomerNumberField.constances.ts";

export const adminHighRiskIndividualsDefaultFilters: AdminHighRiskIndividualsFilterType = {
  [nationalCodeFieldName]: '',
  [firstNameFieldName]: '',
  [lastNameFieldName]: '',
}

export const FAKE_DATA: ResultPersonCardDataType[] = [
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    name: 'حسین مبینی',
    customerId: '1234567890',
    [nationalCodeFieldName]: '1234567890',
    [birthCertificationNumberFieldName]: '1234567890',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    name: 'دوشنبه',
    customerId: '123456789012',
    [comprehensiveForeignNationalsIdFieldName]: '123456789012',
    [nationalityFieldName]: 'افغانستان',
    [citizenshipFieldName]: 'ایران',
  },
  {
    type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    name: 'دیجی کالا',
    customerId: '12345678901',
    [legalBrandNameFieldName]: 'دیجی کالا',
    [legalRegistrationNumberFieldName]: '12345678901',
    [legalTypeFieldName]: 'نوع حقوقی',
  },
]

export const adminHighRiskIndividualsCardSeparatedFieldsNameLabel: Record<SearchPageFormPersonType, {name: any, label: string}[]> = {
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name]: [
    {
      name: customerIdFieldName,
      label: customerNumberFieldLabel
    },
    {
      name: nationalCodeFieldName,
      label: nationalCodeFieldLabel
    },
    {
      name: birthCertificationNumberFieldName,
      label: birthCertificationNumberFieldLabel
    },
  ],
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name]: [
    {
      name: customerIdFieldName,
      label: customerNumberFieldLabel
    },
    {
      name: comprehensiveForeignNationalsIdFieldName,
      label: comprehensiveForeignNationalsIdFieldLabel
    },
    {
      name: nationalityFieldName,
      label: nationalityFieldLabel
    },
  ],
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: [
    {
      name: customerIdFieldName,
      label: customerNumberFieldLabel
    },
    {
      name: legalRegistrationNumberFieldName,
      label: legalRegistrationNumberFieldLabel
    },
    {
      name: legalTypeFieldName,
      label: legalTypeFieldLabel
    },
    {
      name: legalBrandNameFieldName,
      label: legalBrandNameFieldLabel
    },
  ],
}
