import {useParams} from "react-router";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import CardWithHeader from "../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";

function AdminHighRiskIndividualsDetailPage() {

  const {id: customNumber} = useParams()
  const name = useGetQueryParam(QUERY_PARAMS.NAME)

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle hasBack title={name || ''}/>

      <CardWithHeader
        title='تایم لاین تغییرات'
        headerEndAdornment={<div>timeline</div>}
      >
        محتوای تایم لاین
      </CardWithHeader>

      <CardWithHeader
        title='نامه‌ها'
        childrenClassName='bg-gray-50 p-2'
      >
        محتوای نامه ها
      </CardWithHeader>
    </div>
  );
}

export default AdminHighRiskIndividualsDetailPage;
