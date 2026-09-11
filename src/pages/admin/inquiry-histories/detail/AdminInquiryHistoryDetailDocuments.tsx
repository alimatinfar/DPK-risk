import AdminHighRiskLetterDetailDescriptionSection
  from "../../high-risk-individuals/letters/detail/documents/AdminHighRiskLetterDetailDescriptionSection.tsx";
import displayDate from "../../../../utils/display/displayDate.ts";
import AdminHighRiskIndividualsLettersDetailDocumentsDocs
  from "../../high-risk-individuals/letters/detail/documents/AdminHighRiskIndividualsLettersDetailDocumentsDocs.tsx";
import useAdminInquiryHistoryDetailDocuments from "./hooks/useAdminInquiryHistoryDetailDocuments.tsx";


function AdminInquiryHistoryDetailDocuments() {

  const {
    documents
  } = useAdminInquiryHistoryDetailDocuments()

  return (
    <div className='flex flex-col gap-y-4 flex-1'>
      <AdminHighRiskLetterDetailDescriptionSection
        letterDate={displayDate(14050201)} letterNumber={'LTTR-90'}
        reference={'قوه قضائیه'} description={'توضیحات اضافه'}
        requestReason='کلاه‌برداری' responseSubmissionStatus='ارسال شده'
      />

      <AdminHighRiskIndividualsLettersDetailDocumentsDocs
        documents={documents}
      />
    </div>
  );
}

export default AdminInquiryHistoryDetailDocuments;
