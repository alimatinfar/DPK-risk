import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS
} from "./index.constances";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useAdminHighRiskFormStep3 from "./hooks/useAdminHighRiskFormStep3";
import AdminHighRiskFormStep3SearchUserForm from "./AdminHighRiskFormStep3SearchUserForm";


function AdminHighRiskFormStep3() {

  const {
    activeTab, setActiveTab
  } = useAdminHighRiskFormStep3()

  return (
    <div className='flex flex-col gap-y-4'>
      <Card className='flex flex-col gap-y-4'>
        <Tab
          tabs={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />

        <AdminHighRiskFormStep3SearchUserForm
          activeTab={activeTab}
        />
      </Card>

      <AdminHighRiskIndividualsFormButtons/>
    </div>
  );
}

export default AdminHighRiskFormStep3;
