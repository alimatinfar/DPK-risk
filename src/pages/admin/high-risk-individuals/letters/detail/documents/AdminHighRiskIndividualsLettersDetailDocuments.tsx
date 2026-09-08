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
  {responseData}: AdminHighRiskIndividualsLettersDetailPageProps
) {

  const {
    documents, timeLineHistories,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
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
