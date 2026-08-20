import type {TabsProps} from "../../../../../../components/others/Tab/Tab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import SearchPageFormForeignCitizenFields from "../../../../../search/form/SearchPageFormForeignCitizenFields";
import SearchPageFormLegalFields from "../../../../../search/form/SearchPageFormLegalFields";
import SearchPageFormNaturalFields from "../../../../../search/form/SearchPageFormNaturalFields";
import {type ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types";
import {nationalCodeFieldName} from "../../../FormFields/NationalCodeField/index.constances";
import {
  birthCertificationNumberFieldLabel,
  birthCertificationNumberFieldName
} from "../../../../../search/form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances";
import {
  comprehensiveForeignNationalsIdFieldLabel,
  comprehensiveForeignNationalsIdFieldName
} from "../../../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances";
import {
  nationalityFieldLabel,
  nationalityFieldName
} from "../../../../../search/form/formFields/foreignCitizen/NationalityField/NationalityField.constances";
import {
  citizenshipFieldName
} from "../../../../../search/form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances";
import {
  legalBrandNameFieldLabel,
  legalBrandNameFieldName
} from "../../../../../search/form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances";
import {
  legalRegistrationNumberFieldLabel,
  legalRegistrationNumberFieldName
} from "../../../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances";
import {
  legalTypeFieldLabel,
  legalTypeFieldName
} from "../../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances";
import type {SearchPageFormPersonType} from "../../../../../search/form/SearchPageForm.types";
import {
  nationalCodeFieldLabel
} from "../../../../../search/form/formFields/natural/NationalCodeField/NationalCodeField.constances";


export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS: TabsProps['tabs'] = [
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    title: 'حقیقی'
  },
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    title: 'حقوقی'
  },
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    title: 'اتباع'
  },
]

export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT = {
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name]: (
    <SearchPageFormNaturalFields/>
  ),
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: (
    <SearchPageFormLegalFields hiddenAbbreviationField />
  ),
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name]: (
    <SearchPageFormForeignCitizenFields/>
  ),
}

export const adminHighRiskIndividualsCardFormStep3SeparatedFieldsNameLabel: Record<SearchPageFormPersonType, {name: any, label: string}[]> = {
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
  ],
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: [
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

export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_FAKE_INDIVIDUALS: ResultPersonCardDataType[] = [
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