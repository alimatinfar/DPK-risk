import {
  DetailInfoSection
} from "../../../../../../components/others/DetailInfo/DetailInfoSection";
import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import CardWithHeader from "../../../../../../components/others/Card/CardWithHeader/CardWithHeader.tsx";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import AdminHighRiskLetterDetailDescriptionSection from "./AdminHighRiskLetterDetailDescriptionSection.tsx";

const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal = lazy(() => import(
  "./deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailDocumentsFormModal = lazy(() => import(
  "./formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx"
  ))


function AdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    documents,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocuments()

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <AdminHighRiskLetterDetailDescriptionSection
          detailInfoSectionProps={{

          }}
          letterDate='1405/01/01' letterNumber='321564643' reference='قوه قضائیه'
          description='توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه توضیحات کاربر درباره این نامه '
        />

        <CardWithHeader
          title='تایم لاین تغییرات'
          headerEndAdornment={<div>timeline</div>}
        >
          محتوای تایم لاین
        </CardWithHeader>

        <AdminHighRiskIndividualsLettersDetailDocumentsDocs
          documents={documents}
          setDeleteModalState={setDeleteModalState}
          setFormModalState={setFormModalState}
        />
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
