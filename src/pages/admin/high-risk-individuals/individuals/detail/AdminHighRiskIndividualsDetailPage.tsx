import {useParams} from "react-router";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";

function AdminHighRiskIndividualsDetailPage() {

  const {id: customNumber} = useParams()
  const name = useGetQueryParam(QUERY_PARAMS.NAME)

  return (
    <>
     <AdminPageTitle hasBack title={name || ''} />
    </>
  );
}

export default AdminHighRiskIndividualsDetailPage;
