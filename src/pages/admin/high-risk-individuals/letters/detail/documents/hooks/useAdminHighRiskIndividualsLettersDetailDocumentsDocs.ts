import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import {useMemo} from "react";
import {fileTypeFieldName} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";
import type {AdminHighRiskIndividualsLettersDetailPageProps, DocumentItemResponseType} from "../../index.types.ts";


type Props = {
  documentsResponse: DocumentItemResponseType[] | undefined
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDocs(
  {documentsResponse}: Props
) {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    if (!documentsResponse) return []

    return documentsResponse?.map(item => ({
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
  }, [documentsResponse])

  return {
    documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocs;
