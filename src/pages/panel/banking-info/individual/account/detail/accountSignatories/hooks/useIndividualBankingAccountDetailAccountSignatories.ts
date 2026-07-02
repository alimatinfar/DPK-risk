import {
  PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import type {IndividualBankingAccountDetailAccountSignatoriesResponseType} from "../index.types.ts";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";
import {useMemo} from "react";
import displayAvailableValues from "../../../../../../../../utils/display/displayAvailableValues.ts";

function useIndividualBankingAccountDetailAccountSignatories() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailAccountSignatoriesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SIGNATORS,
      method: "POST",
      params: {
        accountNumber
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: index,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_NUMBER]: item?.customerIdStr,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.CUSTOMER_TYPE]: item?.legalTypeTitle,
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName || ''),
      [PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(item?.nationalIDStr, item?.legalNationalIDStr),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default useIndividualBankingAccountDetailAccountSignatories;
