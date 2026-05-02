import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import {
  nationalCodeFieldLabel,
  nationalCodeFieldName
} from "../form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  birthCertificationNumberFieldLabel,
  birthCertificationNumberFieldName
} from "../form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldLabel,
  comprehensiveForeignNationalsIdFieldName
} from "../form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalityFieldLabel,
  nationalityFieldName
} from "../form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {
  citizenshipFieldLabel,
  citizenshipFieldName
} from "../form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalBrandNameFieldLabel,
  legalBrandNameFieldName
} from "../form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldLabel,
  legalRegistrationNumberFieldName
} from "../form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {
  legalTypeFieldLabel,
  legalTypeFieldName
} from "../form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {SearchPageFormPersonType} from "../form/SearchPageForm.types.ts";


export const searchPageResultCardSeparatedFieldsNameLabel: Record<SearchPageFormPersonType, {name: any, label: string}[]> = {
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name]: [
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
      name: comprehensiveForeignNationalsIdFieldName,
      label: comprehensiveForeignNationalsIdFieldLabel
    },
    {
      name: nationalityFieldName,
      label: nationalityFieldLabel
    },
    {
      name: citizenshipFieldName,
      label: citizenshipFieldLabel
    },
  ],
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: [
    {
      name: legalBrandNameFieldName,
      label: legalBrandNameFieldLabel
    },
    {
      name: legalRegistrationNumberFieldName,
      label: legalRegistrationNumberFieldLabel
    },
    {
      name: legalTypeFieldName,
      label: legalTypeFieldLabel
    },
  ],
}