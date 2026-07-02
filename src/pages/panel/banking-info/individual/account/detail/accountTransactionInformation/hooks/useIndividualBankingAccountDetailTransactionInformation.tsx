import {useParams} from "react-router";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import type {IndividualBankingAccountDetailTransactionInformationResponseType} from "../index.types.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS, PERIOD_ID_LABELS} from "../index.constances.ts";
import withSeparator from "../../../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../../../utils/display/displayDate.ts";


function useIndividualBankingAccountDetailTransactionInformation() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailTransactionInformationResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_TURNOVER,
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
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TRANSACTION_PERIOD]: (
        <span className='font-medium'>
              {PERIOD_ID_LABELS?.[item?.periodId]}
        </span>
      ),
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TOTAL_CREDIT]: withSeparator(item?.totalCredit),
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TOTAL_DEBIT]: withSeparator(item?.totalDebit),
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.BALANCE_DIFFERENCE]: withSeparator(item?.totalCreditTotalDebit),
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.FROM_DATE]: displayDate(item?.fromDate),
      [INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS_KEYS.TO_DATE]: displayDate(item.toDate),
    }))
  }, [data])

  return {
    isFetching, error, tableData
  }
}

export default useIndividualBankingAccountDetailTransactionInformation;
