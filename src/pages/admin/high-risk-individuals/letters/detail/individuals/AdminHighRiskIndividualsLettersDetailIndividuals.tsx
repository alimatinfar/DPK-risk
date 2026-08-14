import AdminHighRiskIndividualsLettersDetailIndividualsCategories
  from "./AdminHighRiskIndividualsLettersDetailIndividualsCategories.tsx";
import useModalOpen from "../../../../../../hooks/modal/useModalOpen.tsx";
import type {AdminHighRiskIndividualsLettersDetailIndividualsDataItemType} from "./index.types.ts";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";

const AdminHighRiskIndividualsLettersDetailIndividualsEditModal = lazy(() => import(
  "./AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx"
  ));


function AdminHighRiskIndividualsLettersDetailIndividuals() {

  const {
    open: editPersonModalOpen, shouldBeRemoved: editPersonModalShouldBeRemoved, closeModal: closeEditPersonModalHandler,
    modalState: editPersonModalState, setModalState: setEditPersonModalState
  } = useModalOpen<AdminHighRiskIndividualsLettersDetailIndividualsDataItemType | boolean>(false)

  return (
    <>
      <AdminHighRiskIndividualsLettersDetailIndividualsCategories
        setEditPersonModalState={setEditPersonModalState}
      />

      <DisplayModal shouldBeRemoved={editPersonModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailIndividualsEditModal
          open={editPersonModalOpen} onClose={closeEditPersonModalHandler}
          modalState={editPersonModalState}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailIndividuals;
