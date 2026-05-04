import type {SearchPageResultProps} from "../result/SearchPageResult.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import {legalBrandNameFieldName} from "../form/formFields/legal/LegalBrandNameField/LegalBrandNameField.constances.ts";
import {
  legalRegistrationNumberFieldName
} from "../form/formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.constances.ts";
import {legalTypeFieldName} from "../form/formFields/legal/LegalTypeField/LegalTypeField.constances.ts";
import {
  comprehensiveForeignNationalsIdFieldName
} from "../form/formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.constances.ts";
import {nationalityFieldName} from "../form/formFields/foreignCitizen/NationalityField/NationalityField.constances.ts";
import {citizenshipFieldName} from "../form/formFields/foreignCitizen/CitizenshipField/CitizenshipField.constances.ts";
import {nationalCodeFieldName} from "../form/formFields/natural/NationalCodeField/NationalCodeField.constances.ts";
import {
  birthCertificationNumberFieldName
} from "../form/formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.constances.ts";
import {useMemo} from "react";
import type {CustomResponseType} from "../../../request/types/CustomResponseType.ts";
import type {SearchFormResponseType} from "../SearchPage.types.ts";


type Props = {
  data: CustomResponseType<SearchFormResponseType> | undefined;
}

function useSearchPageResultData(
  {data}: Props
) {

  const resultData: SearchPageResultProps['resultData'] = useMemo(function () {
    if (!data?.data) return []

    return [
      ...data.data.actualCustomers.map(item => ({
        type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
        customerId: item.customerId,
        name: `${item.firstName} ${item.lastName}`,
        [nationalCodeFieldName]: String(item.nationalID),
        [birthCertificationNumberFieldName]: String(item.shenasnameId),
      })),
      ...data.data.nonCitizenCustomers.map(item => ({
        type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
        customerId: item.customerId,
        name: `${item.firstName} ${item.lastName}`,
        [comprehensiveForeignNationalsIdFieldName]: String(item.nationalID),
        [nationalityFieldName]: item.nationalityTitle,
        [citizenshipFieldName]: item.citizenshipTitle,
      })),
      ...data.data.legalCustomers.map(item => ({
        type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
        customerId: item.customerId,
        name: item.legalName,
        [legalBrandNameFieldName]: item.tradeName,
        [legalRegistrationNumberFieldName]: String(item.legalNationalID),
        [legalTypeFieldName]: item.legalType,
      })),
    ]
  }, [data])

  return {
    resultData
  }
}

export default useSearchPageResultData;