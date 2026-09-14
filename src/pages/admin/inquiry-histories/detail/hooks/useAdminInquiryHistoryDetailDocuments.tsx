import type {
  AdminHighRiskIndividualsLettersDetailDocumentType
} from "../../../high-risk-individuals/letters/detail/documents/index.types.ts";
import {fileTypeFieldName} from "../../../high-risk-individuals/FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../high-risk-individuals/FormFields/UploadFileField/index.constances.ts";
import type {AdminInquiryHistoryLetterDetailProps} from "../index.types.ts";
import {useMemo} from "react";

function useAdminInquiryHistoryDetailDocuments(
  {responseData}: AdminInquiryHistoryLetterDetailProps
) {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    const finalData = responseData?.data
    if (!finalData) return []

    return finalData?.letter?.documents?.map(item => ({
      id: item?.id,
      fileTokenId: item?.fileTokenId,
      [fileTypeFieldName]: {id: item?.documentType, name: item?.documentTypeTitle},
      [descriptionFieldName]: item?.description,
      [uploadFileFieldName]: {
        name: item?.name,
        //TODO set size from response
        size: 0,
        data: ''
      }
    }))
  }, [responseData])

  return {
    documents
  }
}

export default useAdminInquiryHistoryDetailDocuments;
