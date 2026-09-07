import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import {
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS,
  PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import useFetchData from "../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import {useParams} from "react-router";
import type {PanelTransactionHistoryEServicePeriodDetailItemResponseType} from "./index.types.ts";
import {useMemo} from "react";
import withSeparator from "../../../../../../../utils/separator/withSeparator.ts";
import displayDate from "../../../../../../../utils/display/displayDate.ts";


function PanelTransactionHistoryEServicePeriodDetailRender() {

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)
  const customerId = useGetQueryParam(QUERY_PARAMS.CUSTOMER_ID)
  const {eServiceId} = useParams()

  const {
    monthName, year, fromDate, toDate
  } = useGetTransactionHistoryPeriodDateObject()

  const {
    data, isFetching, error
  } = useFetchData<PanelTransactionHistoryEServicePeriodDetailItemResponseType[]>({
    axiosConfig: {
      url: APIS.BANK_INFO_GET_TRANSACTION_AGGREGATE_BY_PORT_AND_INVOICE,
      params: {
        fromDate,
        toDate,
        customerId,
        codedargah: eServiceId
      }
    }
  })

  const tableData = useMemo(function () {
    const finalData = data?.data
    // const finalData = PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_FAKE_DATA
    if (!finalData) return []

    return finalData?.map((item, index) => ({
      id: 1,
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.OPERATION_TYPE]: item?.operationType,
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.CREDITOR_AMOUNT]: withSeparator(item?.totalCredit),
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.DEBTOR_AMOUNT]: withSeparator(item?.totalDebit),
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.BALANCE]: withSeparator(item?.totalCreditTotalDebit),
      [PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS_KEYS.DATE]: displayDate(item?.transactionDate),
    }))
  }, [data])


  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel} ${`${monthName} ${year}`}`} hasBack
      />

      <Card>
        <TableRenderLogic
          renderLogicProps={{
            error,
            isLoading: isFetching
          }}
          tableProps={{
            data: tableData,
            columns: PANEL_TRANSACTION_HISTORY_E_SERVICE_PERIOD_DETAIL_TABLE_COLUMNS
          }}
        />
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServicePeriodDetailRender;
