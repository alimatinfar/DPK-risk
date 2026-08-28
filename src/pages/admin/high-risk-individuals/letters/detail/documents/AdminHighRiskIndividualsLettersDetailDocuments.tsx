import useAdminHighRiskIndividualsLettersDetailDocuments
  from "./hooks/useAdminHighRiskIndividualsLettersDetailDocuments.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "./AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import DisplayModal from "../../../../../../components/others/Modal/DisplayModal.tsx";
import {lazy} from "react";
import AdminHighRiskLetterDetailDescriptionSection from "./AdminHighRiskLetterDetailDescriptionSection.tsx";
import HighRiskIndividualsTimeLine from "../HighRiskIndividualsTimeLine/HighRiskIndividualsTimeLine.tsx";
import displayDate from "../../../../../../utils/display/displayDate.ts";
import RenderLogic from "../../../../../../components/others/RenderLogic/RenderLogic.tsx";


const AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal = lazy(() => import(
  "./deleteModal/AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx"
  ))
const AdminHighRiskIndividualsLettersDetailDocumentsFormModal = lazy(() => import(
  "./formModal/AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx"
  ))


function AdminHighRiskIndividualsLettersDetailDocuments() {

  const {
    documents, timeLineHistories, info, infoLoading, infoError,
    deleteModalOpen, deleteModalShouldBeRemoved, closeDeleteModalHandler, deleteModalState, setDeleteModalState,
    formModalOpen, formModalShouldBeRemoved, closeFormModalHandler, formModalState, setFormModalState
  } = useAdminHighRiskIndividualsLettersDetailDocuments()

  return (
    <>
      <div className='flex items-start gap-x-4'>
        <RenderLogic
          isLoading={infoLoading} error={infoError}
        >
          <div className='flex flex-col gap-y-4 flex-1'>
            <AdminHighRiskLetterDetailDescriptionSection
              letterDate={displayDate(info?.letterDate)} letterNumber={info?.letterNo}
              reference={info?.letterRefTitle} description={info?.description}
            />

            <AdminHighRiskIndividualsLettersDetailDocumentsDocs
              documents={documents}
              setDeleteModalState={setDeleteModalState}
              setFormModalState={setFormModalState}
            />
          </div>
        </RenderLogic>

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
