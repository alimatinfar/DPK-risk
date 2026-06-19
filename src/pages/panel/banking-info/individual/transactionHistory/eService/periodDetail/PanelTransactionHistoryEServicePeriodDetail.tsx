import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import useGetTransactionHistoryPeriodDateObject
  from "../../periodDetail/hooks/useGetTransactionHistoryPeriodDateObject.ts";

function PanelTransactionHistoryEServicePeriodDetail() {

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)

  const {
    isCurrentMonth, monthName
  } = useGetTransactionHistoryPeriodDateObject()

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel} ${`${monthName}${isCurrentMonth ? ' (ماه جاری)' : ''}`}`} hasBack
      />
    </div>
  );
}

export default PanelTransactionHistoryEServicePeriodDetail;
