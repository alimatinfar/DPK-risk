import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS, INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import type {IndividualBankingAccountDetailBlockHistoryResponseType} from "./index.types.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../../utils/display/displayDate.ts";


function IndividualBankingAccountDetailBlockHistory() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailBlockHistoryResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_BLOCKED_HISTORY,
      method: "POST",
      params: {
        accountNumber
      }
    }
  })

  const tableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => ({
      id: item.id,
      [INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_AMOUNT]: withSeparator(item.amount),
      [INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_APPLY_DATE]: displayDate(item.doneDate),
      [INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_REMOVE_DATE]: displayDate(item.deleteDate),
      [INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.REASON_CODE]: item.reasonCode,
      [INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS_KEYS.BLOCK_REASON_DESCRIPTION]: item.reasonDescription,
    }))
  }, [data])

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
    <Table
      columns={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailBlockHistory;
