import useGetQueryParam from "../../../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../../../constances/queryParams.ts";
import PanelPageTitle from "../../../../../layout/PanelPageTitle.tsx";
import Card from "../../../../../../../components/others/Card/Card.tsx";
import Table from "../../../../../../../components/others/Table/Table.tsx";


function PanelTransactionHistoryEServiceDetail() {

  const eServiceLabel = useGetQueryParam(QUERY_PARAMS.NAME)

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle
        title={`تراکنش های ${eServiceLabel}`} hasBack
      />

      <Card>
        <></>
        {/*<Table*/}
        {/*  columns={}*/}
        {/*  data={}*/}
        {/*/>*/}
      </Card>
    </div>
  );
}

export default PanelTransactionHistoryEServiceDetail;
