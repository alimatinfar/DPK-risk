import Card from "../../../../../../components/others/Card/Card.tsx";
import AdminHighRiskFormStep3FileUpload, {
  type AdminHighRiskFormStep3FileUploadProps
} from "./AdminHighRiskFormStep3FileUpload.tsx";
import Tab from "../../../../../../components/others/Tab/Tab.tsx";
import {ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS} from "./index.constances.tsx";
import AdminHighRiskFormStep3SearchUserForm from "./AdminHighRiskFormStep3SearchUserForm.tsx";
import AdminHighRiskFormStep3SelectedIndividuals from "./AdminHighRiskFormStep3SelectedIndividuals.tsx";
import AdminHighRiskFormStep3FoundedIndividuals from "./AdminHighRiskFormStep3FoundedIndividuals.tsx";
import AdminHighRiskIndividualsFormButtons from "../../AdminHighRiskIndividualsFormButtons.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import type {ResultPersonCardDataType} from "../../../../../search/result/ResultCard.types.ts";
import useAdminHighRiskFormStep3Share from "./hooks/useAdminHighRiskFormStep3Share.ts";
import {lazy} from "react";

const AdminHighRiskFormStep3DuplicateUserModal = lazy(() => import("./AdminHighRiskFormStep3DuplicateUserModal"));


export type AdminHighRiskFormStep3ShareProps = {
  individuals: ResultPersonCardDataType[];
  setCurrentStep: (currentStep: number) => void;
} & Pick<AdminHighRiskFormStep3FileUploadProps, 'uploadApiUrl'>

function AdminHighRiskFormStep3Share(
  {
    individuals, setCurrentStep, uploadApiUrl
  }: AdminHighRiskFormStep3ShareProps
) {

  const {
    activeTab, setActiveTab, nextStepHandler,
    userDuplicateModalOpen, closeUserDuplicateModalHandler, setUserDuplicateModalState,
    userDuplicateModalState, userDuplicateShouldBeRemoved,
    searchUserResultData, searchUserFormMethods, searchUserOnSubmit, searchUserLoading
  } = useAdminHighRiskFormStep3Share({
    individuals, setCurrentStep
  })

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <Card className='flex flex-col gap-y-4'>
          <AdminHighRiskFormStep3FileUpload
            uploadApiUrl={uploadApiUrl}
          />

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

export default AdminHighRiskFormStep3Share;
