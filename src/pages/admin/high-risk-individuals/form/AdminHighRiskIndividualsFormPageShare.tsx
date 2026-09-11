import AdminPageTitle from "../../layout/AdminPageTitle.tsx";
import FormSteps, {type FormStepsProps} from "../../../../components/Form/FormSteps/FormSteps.tsx";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";
import useAdminHighRiskIndividualsFormPageShare from "./hooks/useAdminHighRiskIndividualsFormPageShare.ts";
import {lazy} from "react";

const AdminHighRiskIndividualsExitFormModal = lazy(() => import(
  "./AdminHighRiskIndividualsExitFormModal.tsx"
  ));


export type AdminHighRiskIndividualsFormPageShareProps = {
  formIsDirty: boolean;
  formSubmitted: boolean;
  clearForm: () => void;
} & Pick<FormStepsProps, 'currentStep' | 'steps'>

function AdminHighRiskIndividualsFormPageShare(
  {
    formIsDirty, formSubmitted, clearForm, currentStep, steps
  }: AdminHighRiskIndividualsFormPageShareProps
) {

  const {
    exitFormShouldBeRemoved, exitFormOpen, exitFormHandler, closeExitFormModalAndResetBlocker
  } = useAdminHighRiskIndividualsFormPageShare({
    clearForm, formIsDirty, formSubmitted
  })

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <AdminPageTitle title='افزودن شخص پرریسک' hasBack/>

        <FormSteps
          steps={steps} currentStep={currentStep}
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

export default AdminHighRiskIndividualsFormPageShare;
