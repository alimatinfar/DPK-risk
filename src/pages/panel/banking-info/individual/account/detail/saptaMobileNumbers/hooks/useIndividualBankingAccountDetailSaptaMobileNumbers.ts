import {useParams} from "react-router";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import type {IndividualBankingAccountDetailSaptaMobileNumbersResponseType} from "../index.types.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS} from "../index.constances.ts";
import displayAvailableValues from "../../../../../../../../utils/display/displayAvailableValues.ts";

function useIndividualBankingAccountDetailSaptaMobileNumbers() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailSaptaMobileNumbersResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SAPTA_MOBILE,
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
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.MOBILE_NUMBER]: item?.mobileNo,
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.OWNER_TYPE]: item?.legalTypeTitle,
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NAME]: displayAvailableValues(item?.firstName, item?.lastName, item?.legalName),
      [INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS_KEYS.NATIONAL_ID]: displayAvailableValues(item?.nationalIDStr, item?.legalNationalIDStr),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default useIndividualBankingAccountDetailSaptaMobileNumbers;
