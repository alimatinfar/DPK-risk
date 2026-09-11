import type {
  AdminHighRiskIndividualsLettersDetailDocumentType
} from "../../../high-risk-individuals/letters/detail/documents/index.types.ts";
import {fileTypeFieldName} from "../../../high-risk-individuals/FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../high-risk-individuals/FormFields/UploadFileField/index.constances.ts";

function useAdminInquiryHistoryDetailDocuments() {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = [
    {
      id: 75,
      fileTokenId: "6442XmQNIPD0Wp",
      [fileTypeFieldName]: {
        id: 1,
        name: "سند نامه ریسک"
      },
      [descriptionFieldName]: "sdfsdf",
      [uploadFileFieldName]: {
        name: "20260907_174414.jpg",
        size: "0",
        data: ""
      }
    },
    {
      id: 75,
      fileTokenId: "6442XmQNIPD0Wp",
      [fileTypeFieldName]: {
        id: 1,
        name: "سند نامه ریسک"
      },
      [descriptionFieldName]: "sdfsdf",
      [uploadFileFieldName]: {
        name: "20260907_174414.jpg",
        size: "0",
        data: ""
      }
    },
    {
      id: 75,
      fileTokenId: "6442XmQNIPD0Wp",
      [fileTypeFieldName]: {
        id: 1,
        name: "سند نامه ریسک"
      },
      [descriptionFieldName]: "sdfsdf",
      [uploadFileFieldName]: {
        name: "20260907_174414.jpg",
        size: "0",
        data: ""
      }
    },
  ]

  return {
    documents
  }
}

export default useAdminInquiryHistoryDetailDocuments;
