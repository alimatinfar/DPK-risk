import AdminPageTitle from "../../../layout/AdminPageTitle.tsx";
import Tab from "../../../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS,
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS, ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import TabContentRender from "../../../../../components/others/Tab/TabContentRender.tsx";
import useGetQueryParam from "../../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../../constances/queryParams.ts";
import APIS from "../../../../../request/constances/apis.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import {useParams} from "react-router";
import type {AdminHighRiskIndividualsLettersDetailPageResponseType} from "./index.types.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";


function AdminHighRiskIndividualsLettersDetailPage() {

  const letterNumber = useGetQueryParam(QUERY_PARAMS.LETTER_NUMBER)
  const {id: letterId} = useParams()
  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS)

  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsLettersDetailPageResponseType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DETAIL_ALL_DATA,
      params: {
        letterId
      }
    }
  })

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle title={`نامه ${letterNumber}`} hasBack>
        <Tab
          tabs={ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </AdminPageTitle>

      <RenderLogic
        error={error} isLoading={isFetching}
      >
        <TabContentRender
          renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_RENDER_OBJECT({responseData: data})}
          activeTab={activeTab}
        />
      </RenderLogic>
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailPage;
