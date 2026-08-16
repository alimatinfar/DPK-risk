import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import {ADMIN_HIGH_RISK_FORM_STEPS} from "./index.constances.tsx";
import FormSteps from "../../../../components/Form/FormSteps/FormSteps.tsx";
import useAdminHighRiskIndividualsForm from "./hooks/useAdminHighRiskIndividualsForm.ts";


function AdminHighRiskIndividualsFormPageContent() {

  const {
    onSubmit, formMethods, setCurrentStep
  } = useAdminHighRiskIndividualsForm()

  return (
    <div className='flex flex-col gap-y-4'>
      <AdminPageTitle title='افزودن شخص پرریسک' hasBack/>

      <FormSteps
        steps={ADMIN_HIGH_RISK_FORM_STEPS}
        onSubmit={onSubmit} formMethods={formMethods}
      />
    </div>
  );
}

export default AdminHighRiskIndividualsFormPageContent;
