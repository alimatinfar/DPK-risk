import {useParams} from "react-router";
import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import Tab from "../../../../components/others/Tab/Tab.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS, ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS,
} from "../../high-risk-individuals/letters/detail/index.constances.tsx";
import TabContentRender from "../../../../components/others/Tab/TabContentRender.tsx";
import useGetQueryParam from "../../../../hooks/useGetQueryParam.ts";
import QUERY_PARAMS from "../../../../constances/queryParams.ts";
import useActiveTab from "../../../../components/others/Tab/hooks/useActiveTab.ts";
import {ADMIN_INQUIRY_HISTORY_DETAIL_TABS_RENDER_OBJECT} from "./index.constances.tsx";
import useFetchData from "../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../request/constances/apis.ts";
import type {AdminInquiryHistoryLetterDetailItemResponseType} from "./index.types.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";


function AdminInquiryHistoryDetailPage() {

  const letterNumber = useGetQueryParam(QUERY_PARAMS.LETTER_NUMBER)
  const {id: letterId} = useParams()
  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS)

  const {
    data: responseData, isFetching, error
  } = useFetchData<AdminInquiryHistoryLetterDetailItemResponseType>({
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_DETAIL,
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
        isLoading={isFetching} error={error}
      >
        <TabContentRender
          renderObject={ADMIN_INQUIRY_HISTORY_DETAIL_TABS_RENDER_OBJECT({responseData})}
          activeTab={activeTab}
        />
      </RenderLogic>
    </div>
  );
}

export default AdminInquiryHistoryDetailPage;
