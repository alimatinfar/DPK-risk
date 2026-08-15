import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import CardWithHeader from "../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import AdminHighRiskIndividualsDetailPageLetters from "./AdminHighRiskIndividualsDetailPageLetters.tsx";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import {useParams} from "react-router";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";


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
        childrenClassName='flex flex-col gap-y-2 bg-gray-50 p-2'
      >
        <AdminHighRiskIndividualsDetailPageLetters />
      </CardWithHeader>
    </div>
  );
}

export default AdminHighRiskIndividualsDetailPage;
