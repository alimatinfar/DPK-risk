import {
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS
} from "../index.constances.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import type {IndividualBankingAccountDetailSpecialInstructionsResponseType} from "../index.types.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import displayDate from "../../../../../../../../utils/display/displayDate.ts";

function useIndividualBankingAccountDetailSpecialInstructions() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailSpecialInstructionsResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_SPECIAL_INSTRUCTIONS,
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
      [INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS.APPLY_DATE]: displayDate(item?.doneDate),
      [INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS.REMOVE_DATE]: displayDate(item?.deleteDate),
      [INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS.REASON_CODE]: item?.reasonCode,
      [INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS.REASON_DESCRIPTION]: item?.reasonDescription,
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default useIndividualBankingAccountDetailSpecialInstructions;
