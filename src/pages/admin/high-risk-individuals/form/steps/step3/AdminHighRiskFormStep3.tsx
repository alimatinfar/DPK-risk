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
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import { lazy } from "react";
import AdminHighRiskFormStep3FileUpload from "./AdminHighRiskFormStep3FileUpload.tsx";

const AdminHighRiskFormStep3DuplicateUserModal = lazy(() => import("./AdminHighRiskFormStep3DuplicateUserModal"));


function AdminHighRiskFormStep3() {

  const {
    activeTab, setActiveTab, nextStepHandler,
    userDuplicateModalOpen, closeUserDuplicateModalHandler, setUserDuplicateModalState,
    userDuplicateModalState, userDuplicateShouldBeRemoved,
    searchUserResultData, searchUserFormMethods, searchUserOnSubmit, searchUserLoading
  } = useAdminHighRiskFormStep3()

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <Card className='flex flex-col gap-y-4'>
          <AdminHighRiskFormStep3FileUpload />

          <Tab
            tabs={ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS}
            activeTab={activeTab} onChange={setActiveTab}
          />

          <div className='flex flex-col'>
            <AdminHighRiskFormStep3SearchUserForm
              activeTab={activeTab} formMethods={searchUserFormMethods} onSubmit={searchUserOnSubmit}
              loading={searchUserLoading}
            />

            <AdminHighRiskFormStep3SelectedIndividuals/>

            <AdminHighRiskFormStep3FoundedIndividuals
              setUserDuplicateModalState={setUserDuplicateModalState}
              closeUserDuplicateModalHandler={closeUserDuplicateModalHandler}
              foundedIndividuals={searchUserResultData}
            />
          </div>
        </Card>

        <AdminHighRiskIndividualsFormButtons
          onClick={nextStepHandler}
        />
      </div>

        <DisplayModal shouldBeRemoved={userDuplicateShouldBeRemoved}>
          <AdminHighRiskFormStep3DuplicateUserModal
            open={userDuplicateModalOpen} onClose={closeUserDuplicateModalHandler}
            userDuplicateModalState={userDuplicateModalState}
          />
        </DisplayModal>
    </>
  );
}

export default AdminHighRiskFormStep3;
