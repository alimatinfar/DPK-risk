import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import AdminHighRiskLetterDetailDescriptionSection from "./AdminHighRiskLetterDetailDescriptionSection.tsx";
import HighRiskIndividualsTimeLine from "../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import type {
  AdminHighRiskIndividualsLettersDetailPageProps
} from "../index.types.ts";


const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal = lazy(() => import(
  "./deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailDocumentsFormModal = lazy(() => import(
  "./formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx"
  ))


function AdminHighRiskIndividualsLettersDetailDocuments(
  {responseData, refetch}: AdminHighRiskIndividualsLettersDetailPageProps
) {

  const {
    documents, timeLineHistories,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    documentFormModalOpen, documentFormModalShouldBeRemoved, closeDocumentFormModalHandler, documentFormModalState,
    setDocumentFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocuments({
    responseData
  })

  const info = responseData?.data?.letter

  return (
    <>
      <div className='flex items-start gap-x-4'>
        <div className='flex flex-col gap-y-4 flex-1'>
          <AdminHighRiskLetterDetailDescriptionSection
            letterDate={displayDate(info?.letterDate)} letterNumber={info?.letterNo}
            reference={info?.letterRefTitle} description={info?.description}
            riskListType={info?.riskListTypeTitle} expireDate={displayDate(info?.validityDate)}
          />

          <AdminHighRiskIndividualsLettersDetailDocumentsDocs
            documents={documents}
            setDeleteModalState={setDeleteModalState}
            setFormModalState={setDocumentFormModalState}
          />
        </div>

        <HighRiskIndividualsTimeLine histories={timeLineHistories} />
      </div>

      <DisplayModal shouldBeRemoved={deleteModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal
          open={deleteModalOpen} onClose={closeDeleteModalHandler} modalState={deleteModalState}
          refetch={refetch}
        />
      </DisplayModal>

      <DisplayModal shouldBeRemoved={documentFormModalShouldBeRemoved}>
        <AdminHighRiskIndividualsLettersDetailDocumentsFormModal
          open={documentFormModalOpen} onClose={closeDocumentFormModalHandler} modalState={documentFormModalState}
          refetch={refetch}
        />
      </DisplayModal>
    </>
  );
}

export default AdminHighRiskIndividualsLettersDetailDocuments;
