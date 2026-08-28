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

function AdminHighRiskIndividualsLettersDetailPage() {

  const letterNumber = useGetQueryParam(QUERY_PARAMS.LETTER_NUMBER)
  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_KEYS.DOCUMENTS)

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle title={`نامه ${letterNumber}`} hasBack>
        <Tab
          tabs={ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />
      </AdminPageTitle>

      <TabContentRender
        renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_LETTERS_DETAIL_TABS_RENDER_OBJECT}
        activeTab={activeTab}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsLettersDetailPage;
