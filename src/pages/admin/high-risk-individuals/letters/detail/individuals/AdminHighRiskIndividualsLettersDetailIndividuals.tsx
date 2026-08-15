import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useModalOpen from "../../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType, ModalStateTypeId
} from "./index.types.ts";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy, useState} from "react";
import useAdminHighRiskIndividualsDocumentListModalStates from "./docListModal/hooks/useAdminHighRiskIndividualsDocumentListModalStates.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "./editModal/hooks/useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import useAdminHighRiskIndividualsExitModalStates
  from "./exitModal/hooks/useAdminHighRiskIndividualsExitModalStates.ts";


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
    open: editPersonModalOpen, shouldBeRemoved: editPersonModalShouldBeRemoved, closeModal: closeEditPersonModalHandler,
    modalState: editPersonModalState, setModalState: setEditPersonModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

  const {
    docListModalOpen, docListModalShouldBeRemoved, closeDocListModalHandler, docListModalState, setDocListModalState
  } = useAdminHighRiskIndividualsDocumentListModalStates()

  const {
    exitPersonModalOpen, exitPersonModalShouldBeRemoved, closeExitPersonModalHandler,
    exitPersonModalState, setExitPersonModalState
  } = useAdminHighRiskIndividualsExitModalStates<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

  const {
    personTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle({
    modalState: exitPersonModalState
  })

  return (
    <>
      <AdminHighRiskIndividualsLettersDetailIndividualsCategories
        setEditPersonModalState={setEditPersonModalState}
        setDocListModalState={setDocListModalState}
        setExitPersonModalState={setExitPersonModalState}
      />

      <DisplayModal shouldBeRemoved={editPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsEditModal
          open={editPersonModalOpen} onClose={closeEditPersonModalHandler}
          modalState={editPersonModalState}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={docListModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsDocListModal
          open={docListModalOpen} onClose={closeDocListModalHandler}
          modalState={docListModalState}
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
