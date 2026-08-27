import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import AdminHighRiskLetterDetailDescriptionSection from "./AdminHighRiskLetterDetailDescriptionSection.tsx";
import HighRiskIndividualsTimeLine from "../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";


const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal = lazy(() => import(
  "./deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailDocumentsFormModal = lazy(() => import(
  "./formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx"
  ))


function AdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    documents, timeLineHistories,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocuments()

  return (
    <>
      <div className='flex items-start gap-x-4'>
        <div className='flex flex-col gap-y-4 flex-1'>
          <AdminHighRiskLetterDetailDescriptionSection
            letterDate='1405/01/01' letterNumber='321564643' reference='قوه قضائیه'
            description='توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه '
          />

          <AdminHighRiskIndividualsLettersDetailDocumentsDocs
            documents={documents}
            setDeleteModalState={setDeleteModalState}
            setFormModalState={setFormModalState}
          />
        </div>

        <HighRiskIndividualsTimeLine histories={timeLineHistories} />
      </div>

      <DisplayModal shouldBeRemoved={deleteModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal
          open={deleteModalOpen} onClose={closeDeleteModalHandler} modalState={deleteModalState}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={formModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailDocumentsFormModal
          open={formModalOpen} onClose={closeFormModalHandler} modalState={formModalState}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocuments;
