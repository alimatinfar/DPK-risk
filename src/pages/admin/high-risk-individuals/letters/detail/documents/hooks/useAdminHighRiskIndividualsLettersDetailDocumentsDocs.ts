import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import {useMemo} from "react";
import {fileTypeFieldName} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";
import type {AdminHighRiskIndividualsLettersDetailPageProps} from "../../index.types.ts";

function useAdminHighRiskIndividualsLettersDetailDocumentsDocs(
  {responseData}: AdminHighRiskIndividualsLettersDetailPageProps
) {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    const finalData = responseData?.data
    if (!finalData) return []

    return finalData?.letter?.documents?.map(item => ({
      id: item?.id,
      fileTokenId: item?.fileTokenId,
      [fileTypeFieldName]: {id: item?.documentType, name: item?.documentTypeTitle},
      [descriptionFieldName]: item?.description,
      [uploadFileFieldName]: undefined
    }))
  }, [responseData])

  return {
    documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocs;
