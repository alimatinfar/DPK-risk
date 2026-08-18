import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import {ADMIN_HIGH_RISK_FORM_STEPS} from "./constances/index.constances.tsx";
import FormSteps from "../../../../components/Form/FormSteps/FormSteps.tsx";


function AdminHighRiskIndividualsFormPageContent() {
  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle title='افزودن شخص پرریسک' hasBack/>

      <FormSteps
        steps={ADMIN_HIGH_RISK_FORM_STEPS}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsFormPageContent;
