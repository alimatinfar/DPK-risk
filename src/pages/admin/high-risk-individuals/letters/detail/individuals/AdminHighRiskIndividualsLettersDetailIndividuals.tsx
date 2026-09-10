import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

import APIS from "../../../../../../request/constances/apis.ts";
import useAdminHighRiskIndividualsLettersDetailIndividuals
  from "./hooks/useAdminHighRiskIndividualsLettersDetailIndividuals.ts";
import RenderLogic from "../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailPageProps
} from "../index.types.ts";


const AdminHighRiskIndividualsLettersDetailIndividualsEditModal = lazy(() => import(
  "./editModal/AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx"
  ));

const AdminHighRiskIndividualsLettersDetailIndividualsDocListModal = lazy(() => import(
  "./docListModal/AdminHighRiskIndividualsLettersDetailIndividualsDocListModal.tsx"
  ));

const AdminHighRiskIndividualsLettersDetailIndividualsExitModal = lazy(() => import(
  "./exitModal/AdminHighRiskIndividualsLettersDetailIndividualsExitModal.tsx"
  ));


function AdminHighRiskIndividualsLettersDetailIndividuals(
  {responseData}: AdminHighRiskIndividualsLettersDetailPageProps
) {

  const {
    setExitPersonModalState, exitPersonModalShouldBeRemoved, setDocListModalState,
    docListModalShouldBeRemoved, docListModalOpen, closeDocListModalHandler, docListModalState,
    exitPersonModalOpen, closeExitPersonModalHandler, exitPersonModalState, personTitle,
    individualsList
  } = useAdminHighRiskIndividualsLettersDetailIndividuals({
    responseData
  })

  return (
    <>
      <AdminHighRiskIndividualsLettersDetailIndividualsCategories
        setExitPersonModalState={setExitPersonModalState} data={individualsList}
        setDocListModalState={setDocListModalState}
      />

      {/*<DisplayModal shouldBeRemoved={editPersonModalShouldBeRemoved}>*/}
      {/*  <AdminHighRiskIndividualsLettersDetailIndividualsEditModal*/}
      {/*    open={editPersonModalOpen} onClose={closeEditPersonModalHandler}*/}
      {/*    modalState={editPersonModalState}*/}
      {/*  />*/}
      {/*</DisplayModal>*/}

      <DisplayModal shouldBeRemoved={docListModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModal
          open={docListModalOpen} onClose={closeDocListModalHandler}
          modalState={docListModalState}
          deleteDocumentApiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_DELETE_DOCUMENT}
          editDocumentApiAddress={APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_EDIT_DOCUMENT}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={exitPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsExitModal
          open={exitPersonModalOpen} onClose={closeExitPersonModalHandler}
          modalState={typeof exitPersonModalState !== 'boolean' ? exitPersonModalState?.riskCustomerId : exitPersonModalState}
          personTitle={personTitle}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividuals;
