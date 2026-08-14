import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useModalOpen from "../../../../../../hooks/modal/useModalOpen.tsx";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDataItemType, DocumentModalState
} from "./index.types.ts";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";


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
    open: docListModalOpen, shouldBeRemoved: docListModalShouldBeRemoved, closeModal: closeDocListModalHandler,
    modalState: docListModalState, setModalState: setDocListModalState
  } = useModalOpen<DocumentModalState | boolean>(false)

  const {
    open: exitPersonModalOpen, shouldBeRemoved: exitPersonModalShouldBeRemoved, closeModal: closeExitPersonModalHandler,
    modalState: exitPersonModalState, setModalState: setExitPersonModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

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
          modalState={exitPersonModalState}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividuals;
