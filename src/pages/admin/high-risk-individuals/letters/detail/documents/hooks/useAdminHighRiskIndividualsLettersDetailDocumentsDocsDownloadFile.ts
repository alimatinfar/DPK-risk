import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import fireResponseErrorToast from "../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import downloadFileFromBase64 from "../../../../../../../utils/fileOperations/downloadFileFromBase64.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";

type BodyDataType = {
  fileTokenId: string;
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile(
  document: AdminHighRiskIndividualsLettersDetailDocumentType
) {

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    dataInParams: true,
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_GET_FILE_CONTENT, method: 'GET'
    }
  })

  async function downloadFileHandler() {

    const bodyData: BodyDataType = {
      fileTokenId: String(document?.fileTokenId)
    }

    mutate(bodyData, {
      onSuccess: (response) => {
        downloadFileFromBase64({
          fileName: document?.[uploadFileFieldName]?.name || 'file',
          base64: response?.data
        })
      },
      ...fireResponseErrorToast()
    })
  }

  return {
    downloadFileHandler, isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocsDownloadFile;
