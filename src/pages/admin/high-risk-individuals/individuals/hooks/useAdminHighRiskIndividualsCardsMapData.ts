import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../search/form/SearchPageForm.constances.ts";
import {nationalCodeFieldName} from "../../FormFields/NationalCodeField/index.constances.ts";
import {
  birthCertificationNumberFieldName
} from "../../../../search/form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../../../../search/form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {
  nationalityFieldName
} from "../../../../search/form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {
  citizenshipFieldName
} from "../../../../search/form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {
  legalBrandNameFieldName
} from "../../../../search/form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../../../../search/form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {legalTypeFieldName} from "../../../../search/form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import type {AdminHighRiskIndividualsCustomerResponseItemType} from "../index.types.ts";

function useAdminHighRiskIndividualsCardsMapData() {

  function getPersonDataList(finalData: AdminHighRiskIndividualsCustomerResponseItemType) {
    if (!finalData) return []

    const realCustomers = finalData?.realCustomer?.map(item => ({
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
      //TODO should be set customerIdStr
      customerId: item?.customerId,
      name: `${item?.firstName} ${item?.lastName}`,
      //TODO should be set nationalIDStr
      [nationalCodeFieldName]: String(item?.nationalID),
      //TODO should be get from api
      [birthCertificationNumberFieldName]: '',
    }))

    const nonCitizenCustomers = finalData?.nonCitizenCustomer?.map(item => ({
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
      //TODO should be set customerIdStr
      customerId: item?.customerId,
      name: `${item?.firstName} ${item?.lastName}`,
      //TODO should be set nationalIDStr
      [comprehensiveForeignNationalsIdFieldName]: String(item?.nationalID),
      //TODO should be get from api
      [nationalityFieldName]: '',
      //TODO should be get from api
      [citizenshipFieldName]: '',
    }))

    const legalCustomers = finalData?.legalCustomer?.map(item => ({
      type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
      //TODO should be set customerIdStr
      customerId: item?.customerId,
      name: item?.lastName,
      //TODO should be get from api
      [legalBrandNameFieldName]: '',
      //TODO should be set nationalIDStr
      [legalRegistrationNumberFieldName]: String(item?.nationalID),
      //TODO should be get from api
      [legalTypeFieldName]: '',
    }))

    return [
      ...realCustomers || [],
      ...nonCitizenCustomers || [],
      ...legalCustomers || [],
    ]
  }

  return {
    getPersonDataList
  }
}

export default useAdminHighRiskIndividualsCardsMapData;
