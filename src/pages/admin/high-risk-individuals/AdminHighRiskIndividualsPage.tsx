import AdminPageTitle from "../layout/AdminPageTitle.tsx";
import AddButton from "../../../components/Form/Button/inheritedButtons/AddButton.tsx";
import Card from "../../../components/others/Card/Card.tsx";
import Tab from "../../../components/others/Tab/Tab.tsx";
import useActiveTab from "../../../components/others/Tab/hooks/useActiveTab.ts";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS,
  ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS
} from "./index.constances.tsx";
import useFilter from "../../../components/Form/FilterForm/hooks/useFilter.ts";
import {adminHighRiskIndividualsDefaultFilters} from "./individuals/index.constances.ts";
import QUERY_PARAMS from "../../../constances/queryParams.ts";
import {adminHighRiskIndividualsLettersDefaultFilters} from "./letters/index.constances.tsx";
import {Link} from "react-router";
import ROUTER_LINKS from "../../../constances/routerLinks.ts";
import {lazy, Suspense} from "react";
import TableSuspense from "../../../components/others/RenderLogic/TableSuspense.tsx";
import AdminHighRiskIndividualsLettersTableLoading from "./letters/AdminHighRiskIndividualsLettersTableLoading.tsx";
import AdminHighRiskIndividualsCardsLoading from "./individuals/AdminHighRiskIndividualsCardsLoading.tsx";
import AdminHighRiskIndividualsFilter from "./individuals/AdminHighRiskIndividualsFilter.tsx";

const AdminHighRiskIndividualsLettersTable = lazy(() => import(
  "./letters/AdminHighRiskIndividualsLettersTable.tsx"
  ));
const AdminHighRiskIndividualsCards = lazy(() => import(
  "./individuals/AdminHighRiskIndividualsCards.tsx"
  ));
const AdminHighRiskIndividualsLettersFilter = lazy(() => import(
  "./letters/AdminHighRiskIndividualsLettersFilter.tsx"
  ));

function AdminHighRiskIndividualsPage() {

  const {
    filters: individualsFilters, setFilters: setIndividualsFilters
  } = useFilter({
    defaultFilterFormData: adminHighRiskIndividualsDefaultFilters,
    customFilterQueryParam: `${QUERY_PARAMS.FILTERS}-individuals`
  })

  const {
    filters: lettersFilters, setFilters: setLettersFilters,
    setCurrentPage: setLettersCurrentPage, setRowsPerPage: setLettersRowsPerPage
  } = useFilter({
    defaultFilterFormData: adminHighRiskIndividualsLettersDefaultFilters,
    customFilterQueryParam: `${QUERY_PARAMS.FILTERS}-letters`
  })

  const [activeTab, setActiveTab] = useActiveTab(ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.INDIVIDUALS)
  const isLettersTab = activeTab === ADMIN_HIGH_RISK_INDIVIDUALS_TABS_KEYS.LETTERS

  return (
    <div className='flex flex-col gap-y-4'>
      <div>
        <AdminPageTitle children={(
          <Link to={ROUTER_LINKS.ADMIN_HIGH_RISK_INDIVIDUAL_FORM}>
            <AddButton>
              ثبت جدید
            </AddButton>
          </Link>
        )}/>
      </div>

      <Card className='flex flex-col gap-y-4'>
        <div className='flex items-center justify-between'>
          <Tab
            tabs={ADMIN_HIGH_RISK_INDIVIDUALS_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />

          {isLettersTab && (
            <AdminHighRiskIndividualsLettersFilter
              filters={lettersFilters} setFilters={setLettersFilters}
            />
          )}
        </div>

        {isLettersTab ? (
          <TableSuspense fallback={<AdminHighRiskIndividualsLettersTableLoading/>}>
            <AdminHighRiskIndividualsLettersTable
              filters={lettersFilters}
              setCurrentPage={setLettersCurrentPage}
              setRowsPerPage={setLettersRowsPerPage}
            />
          </TableSuspense>
        ) : (
          <AdminHighRiskIndividualsFilter
            filters={individualsFilters} setFilters={setIndividualsFilters}
          />
        )}
      </Card>

      {!isLettersTab && (
        <Suspense fallback={<AdminHighRiskIndividualsCardsLoading/>}>
          <AdminHighRiskIndividualsCards
            filters={individualsFilters}
          />
        </Suspense>
      )}
    </div>
  );
}

export default AdminHighRiskIndividualsPage;
