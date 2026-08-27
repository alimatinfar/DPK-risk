import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import {ADMIN_HIGH_RISK_FORM_STEPS} from "./constances/index.constances.tsx";
import FormSteps from "../../../../components/Form/FormSteps/FormSteps.tsx";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import useAdminHighRiskIndividualsFormPage from "./hooks/useAdminHighRiskIndividualsFormPage.ts";

const AdminHighRiskIndividualsExitFormModal = lazy(() => import(
  "./AdminHighRiskIndividualsExitFormModal.tsx"
  ));


function AdminHighRiskIndividualsFormPage() {

  const {
    currentStep, exitFormShouldBeRemoved, exitFormOpen,
    closeExitFormModalAndResetBlocker, exitFormHandler
  } = useAdminHighRiskIndividualsFormPage()

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <AdminPageTitle title='افزودن شخص پرریسک' hasBack/>

        <FormSteps
          steps={ADMIN_HIGH_RISK_FORM_STEPS} currentStep={currentStep}
        />
      </div>

      <DisplayModal shouldBeRemoved={exitFormShouldBeRemoved}>
        <AdminHighRiskIndividualsExitFormModal
          open={exitFormOpen} onClose={closeExitFormModalAndResetBlocker}
          exitFormHandler={exitFormHandler}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsFormPage;
