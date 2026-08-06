import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import Card from "../../../components/others/Card/Card.tsx";
import Tab from "../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FILTERS_TABS_RENDER_OBJECT,
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS,
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS, ADMIN_HIGH_RISK_INDIVIDUALS_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import TabContentRender from "../../../components/others/Tab/TabContentRender.tsx";
import useFilter from "../../../components/Form/FilterForm/hooks/useFilter.ts";
import {adminHighRiskIndividualsDefaultFilters} from "./individuals/index.constances.ts";
import QUERY_PARAMS from "../../../constances/queryParams.ts";
import {adminHighRiskIndividualsLettersDefaultFilters} from "./letters/index.constances.tsx";


function AdminHighRiskIndividualsPage() {

  const {
    filters: individualsFilters, setFilters: setIndividualsFilters
  } = useFilter({
    defaultFilterFormData: adminHighRiskIndividualsDefaultFilters,
    customFilterQueryParam: `${QUERY_PARAMS.FILTERS}-individuals`
  })

  const {
    filters: lettersFilters, setFilters: setLettersFilters
  } = useFilter({
    defaultFilterFormData: adminHighRiskIndividualsLettersDefaultFilters,
    customFilterQueryParam: `${QUERY_PARAMS.FILTERS}-letters`
  })

  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS)
  const isLettersTab = activeTab === ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS

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

          <TabContentRender
            renderObject={ADMIN_HIGH_RISK_INDIVIDUALS_FILTERS_TABS_RENDER_OBJECT({
              filters: isLettersTab ? lettersFilters : individualsFilters,
              setFilters: isLettersTab ? setLettersFilters : setIndividualsFilters
            })}
            activeTab={activeTab}
          />
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
