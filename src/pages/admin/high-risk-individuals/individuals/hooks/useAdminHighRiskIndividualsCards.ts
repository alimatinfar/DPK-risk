import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import {useNavigate} from "react-router";
import {useMemo} from "react";
import type {AdminHighRiskIndividualsCardsProps} from "../AdminHighRiskIndividualsCards.tsx";
import type {AdminHighRiskIndividualsCustomerResponseItemType} from "../index.types.ts";
import {nationalCodeFieldName} from "../../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName} from "../../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName} from "../../FormFields/LastNameField/index.constances.ts";
import getCleanBodyDataObject from "../../../../../request/utils/getCleanBodyDataObject.ts";
import {riskListTypeFieldName} from "../../FormFields/RiskListTypeField/index.constances.ts";
import getSelectIdValue from "../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import checkFormHasAtLeastOneValue
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/checkFormHasAtLeastOneValue.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../search/form/SearchPageForm.constances.ts";
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
import useAdminHighRiskIndividualsCardsMapData from "./useAdminHighRiskIndividualsCardsMapData.ts";


function useAdminHighRiskIndividualsCards(
  {filters}: Pick<AdminHighRiskIndividualsCardsProps, 'filters'>
) {

  const filtersData = filters?.data

  const hasFilterData = checkFormHasAtLeastOneValue(filtersData)

  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsCustomerResponseItemType>({
    queryKey: [filters],
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMERS,
      params: getCleanBodyDataObject({
        RiskListType: getSelectIdValue(filtersData?.[riskListTypeFieldName]),
        NationalId: filtersData?.[nationalCodeFieldName],
        FName: filtersData?.[firstNameFieldName],
        LName: filtersData?.[lastNameFieldName],
      })
    },
    options: {
      enabled: !!hasFilterData
    }
  })

  const navigate = useNavigate()

  const {
    getPersonDataList
  } = useAdminHighRiskIndividualsCardsMapData()

  const cardsData = useMemo(function () {
    // const finalData = FAKE_DATA
    const finalData = data?.data
    if (!finalData) return []

    return getPersonDataList(finalData)
  }, [data?.data])

  return {
    error, isFetching, cardsData, hasFilterData
  }
}

export default useAdminHighRiskIndividualsCards;
