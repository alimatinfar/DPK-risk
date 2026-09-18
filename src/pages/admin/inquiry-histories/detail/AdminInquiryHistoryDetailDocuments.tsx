import AdminHighRiskLetterDetailDescriptionSection
  from "../../high-risk-individuals/letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import displayDate from "../../../../utils/display/displayDate.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "../../high-risk-individuals/letters/detail/documents/AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import useAdminInquiryHistoryDetailDocuments from "./hooks/useAdminInquiryHistoryDetailDocuments.tsx";
import type {AdminInquiryHistoryLetterDetailProps} from "./index.types.ts";
import {lazy} from "react";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";

const AdminInquiryHistoryDetailDocumentsEditLetterModal = lazy(() => import(
  "./AdminInquiryHistoryDetailDocumentsEditLetterModal.tsx"
  ));


function AdminInquiryHistoryDetailDocuments(
  {
    responseData, refetch
  }: AdminInquiryHistoryLetterDetailProps
) {

  const {
    documents, editModalShouldBeRemoved, editModalOpen, openEditModalModalHandler, closeEditModalModalHandler
  } = useAdminInquiryHistoryDetailDocuments({
    responseData
  })

  const info = responseData?.data?.letter

  return (
    <>
      <div className='flex flex-col gap-y-4 flex-1'>
        <AdminHighRiskLetterDetailDescriptionSection
          letterDate={displayDate(info?.letterDate)} letterNumber={info?.letterNo}
          reference={info?.letterRefTitle} description={info?.description}
          requestReason={info?.resonTitle} responseSubmissionStatus={info?.statusTitle}
          openEditModalHandler={openEditModalModalHandler}
        />

        <AdminHighRiskIndividualsLettersDetailDocumentsDocs
          documents={documents}
        />
      </div>

      <DisplayModal shouldBeRemoved={editModalShouldBeRemoved}>
        <AdminInquiryHistoryDetailDocumentsEditLetterModal
          open={editModalOpen} onClose={closeEditModalModalHandler} responseData={responseData}
        />
      </DisplayModal>
    </>
  );
}

export default AdminInquiryHistoryDetailDocuments;
