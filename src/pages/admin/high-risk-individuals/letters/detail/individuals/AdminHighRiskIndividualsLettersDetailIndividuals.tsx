import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

import APIS from "../../../../../../request/constances/apis.ts";
import useAdminHighRiskIndividualsLettersDetailIndividuals
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividuals.ts";
import RenderLogic from "../../../../../../components/others/RenderLogic/RenderLogic.tsx";


const AdminHighRiskIndividualsLettersDetailIndividualsEditModal = lazy(() => import(
  "./editModal/AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx"
  ));

const AdminHighRiskIndividualsLettersDetailIndividualsDocListModal = lazy(() => import(
  "./docListModal/AdminHighRiskIndividualsLettersDetailIndividualsDocListModal.tsx"
  ));

const AdminHighRiskIndividualsLettersDetailIndividualsExitModal = lazy(() => import(
  "./exitModal/AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx"
  ));


function AdminHighRiskIndividualsLettersDetailIndividuals() {

  const {
    setEditPersonModalState, setDocListModalState, setExitPersonModalState, editPersonModalShouldBeRemoved,
    editPersonModalOpen, closeEditPersonModalHandler, editPersonModalState, docListModalShouldBeRemoved,
    docListModalOpen, closeDocListModalHandler, docListModalState, exitPersonModalShouldBeRemoved,
    exitPersonModalOpen, closeExitPersonModalHandler, exitPersonModalState, personTitle,
    individualsList, individualsLoading, individualsError
  } = useAdminHighRiskIndividualsLettersDetailIndividuals()

  return (
    <>
      <RenderLogic
        isLoading={individualsLoading} error={individualsError}
      >
        <AdminHighRiskIndividualsLettersDetailIndividualsCategories
          setEditPersonModalState={setEditPersonModalState} setDocListModalState={setDocListModalState}
          setExitPersonModalState={setExitPersonModalState} data={individualsList}
        />
      </RenderLogic>

      <DisplayModal shouldBeRemoved={editPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsEditModal
          open={editPersonModalOpen} onClose={closeEditPersonModalHandler}
          modalState={editPersonModalState}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={docListModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModal
          open={docListModalOpen} onClose={closeDocListModalHandler}
          modalState={docListModalState} isCustomer
          deleteDocumentApiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_DELETE_DOCUMENT}
          editDocumentApiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EDIT_DOCUMENT}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={exitPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsExitModal
          open={exitPersonModalOpen} onClose={closeExitPersonModalHandler}
          modalState={typeof exitPersonModalState !== 'boolean' ? exitPersonModalState?.id : exitPersonModalState}
          personTitle={personTitle}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividuals;
