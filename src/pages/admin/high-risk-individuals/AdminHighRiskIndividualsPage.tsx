import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import Card from "../../../components/others/Card/Card.tsx";
import Tab from "../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS,
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS, ADMIN_HIGH_RISK_INDIVIDUALS_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import TabContentRender from "../../../components/others/Tab/TabContentRender.tsx";

function AdminHighRiskIndividualsPage() {

  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS)

  return (
    <div className='flex flex-col gap-y-4'>
      <div>
        <AdminPageTitle children={(
          <AddButton>
            ثبت جدید
          </AddButton>
        )}/>
      </div>

      <Card className='flex flex-col gap-y-4'>
        <div className='flex items-center justify-between'>
          <Tab
            tabs={ADMIN_HIGH_RISK_INDIVIDUALS_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />

          <div>
            <Button
              rightIcon={<SearchIcon/>} fullWidth
              variant='default' color='white'
            >
              جستجو
            </Button>
          </div>
        </div>

        <TabContentRender
          renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_TABS_RENDER_OBJECT}
          activeTab={activeTab}
        />
      </Card>
    </div>
  );
}

export default AdminHighRiskIndividualsPage;
