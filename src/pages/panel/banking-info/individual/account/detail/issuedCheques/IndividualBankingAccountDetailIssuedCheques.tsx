import Table from "../../../../../../../components/others/Table/Table.tsx";
import {INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";
import {useParams} from "react-router";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useMemo} from "react";
import {INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS_KEYS} from "../returnedCheques/index.constances.ts";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../../utils/display/displayDate.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {IndividualBankingAccountDetailIssuedChequesResponseType} from "./index.types.ts";


function IndividualBankingAccountDetailIssuedCheques() {

  const {id: accountNumber} = useParams()

  const {
    data, isFetching, error
  } = useFetchData<IndividualBankingAccountDetailIssuedChequesResponseType>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_ACCOUNT_CHEQUES,
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
      [INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_NUMBER]: item.cheqNumber,
      [INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_AMOUNT]: withSeparator(item.amount),
      [INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS_KEYS.CHECK_DATE]: displayDate(item.doneDate),
    }))
  }, [data])


  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
    <Table
      columns={INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailIssuedCheques;
