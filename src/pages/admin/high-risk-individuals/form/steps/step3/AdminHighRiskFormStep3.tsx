import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import {
  ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS
} from "./index.constances";
import Card from "../../../../../../components/others/Card/Card.tsx";
import useAdminHighRiskFormStep3 from "./hooks/useAdminHighRiskFormStep3";
import AdminHighRiskFormStep3SearchUserForm from "./AdminHighRiskFormStep3SearchUserForm";
import AdminHighRiskFormStep3FoundedIndividuals from "./AdminHighRiskFormStep3FoundedIndividuals.tsx";
import AdminHighRiskFormStep3SelectedIndividuals from "./AdminHighRiskFormStep3SelectedIndividuals";


function AdminHighRiskFormStep3() {

  const {
    activeTab, setActiveTab, foundedIndividuals, setFoundedIndividuals, nextStepHandler
  } = useAdminHighRiskFormStep3()

  return (
    <div className='flex flex-col gap-y-4'>
      <Card className='flex flex-col gap-y-4'>
        <Tab
          tabs={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS}
          activeTab={activeTab} onChange={setActiveTab}
        />

        <div className='flex flex-col'>
          <AdminHighRiskFormStep3SearchUserForm
            activeTab={activeTab} setFoundedIndividuals={setFoundedIndividuals}
          />

          <AdminHighRiskFormStep3SelectedIndividuals />

          <AdminHighRiskFormStep3FoundedIndividuals foundedIndividuals={foundedIndividuals} />
        </div>
      </Card>

      <AdminHighRiskIndividualsFormButtons
        onClick={nextStepHandler}
      />
    </div>
  );
}

export default AdminHighRiskFormStep3;
