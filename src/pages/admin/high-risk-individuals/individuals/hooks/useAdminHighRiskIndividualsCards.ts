import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import cleanObject from "../../../../../utils/cleanObject.ts";
import {letterNumberFieldName} from "../../FormFields/LetterNumberField/index.constances.ts";
import getSelectIdValue from "../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {announceReferenceFieldName} from "../../FormFields/AnnouncingReferenceField/index.constances.ts";
import getBodyDataDateField from "../../../../../request/utils/getBodyDataDateField.ts";
import {letterFromDateFieldName} from "../../FormFields/LetterFromDateField/index.constances.ts";
import {useNavigate} from "react-router";
import {useMemo} from "react";
import type {AdminHighRiskIndividualsCardsProps} from "../AdminHighRiskIndividualsCards.tsx";
import type {AdminHighRiskIndividualsCustomerResponseItemType} from "../index.types.ts";
import {FAKE_DATA} from "../index.constances.ts";
import {nationalCodeFieldName} from "../../FormFields/NationalCodeField/index.constances.ts";
import {firstNameFieldName} from "../../FormFields/FirstNameField/index.constances.ts";
import {lastNameFieldName} from "../../FormFields/LastNameField/index.constances.ts";


function useAdminHighRiskIndividualsCards(
  {filters}: Pick<AdminHighRiskIndividualsCardsProps, 'filters'>
) {

  const filtersData = filters?.data

  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsCustomerResponseItemType[]>({
    queryKey: [filters],
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMERS,
      params: cleanObject({
        NationalId: filtersData?.[nationalCodeFieldName],
        FName: filtersData?.[firstNameFieldName],
        LName: filtersData?.[lastNameFieldName],
      })
    }
  })

  const navigate = useNavigate()

  const cardsData = useMemo(function () {
    if (!data?.data) return []

    return FAKE_DATA
    // return data?.data?.map((item) => ({
    //   // TODO should set type
    //   type: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    //   name: `${item.firstName} ${item.lastName}`,
    //   [customerIdFieldName]: item.customerId,
    //   [nationalCodeFieldName]: item.nationalID,
    //   [birthCertificationNumberFieldName]: item.,
    // }))
  }, [data?.data])

  return {
    error, isFetching, cardsData
  }
}

export default useAdminHighRiskIndividualsCards;
