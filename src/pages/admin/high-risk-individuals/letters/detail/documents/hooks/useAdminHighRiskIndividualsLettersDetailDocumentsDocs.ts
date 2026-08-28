import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import {useMemo} from "react";
import {fileTypeFieldName} from "../../../../FormFields/FileTypeField/index.constances.ts";
import {descriptionFieldName} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../FormFields/UploadFileField/index.constances.ts";

function useAdminHighRiskIndividualsLettersDetailDocumentsDocs() {

  //TODO should get this data from api
  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    return [
      {
        id: 1,
        [fileTypeFieldName]: {id: 1, name: 'قوه قضائیه'},
        [descriptionFieldName]: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
        [uploadFileFieldName]: undefined
      },
      {
        id: 2,
        [fileTypeFieldName]: {id: 1, name: 'قوه قضائیه'},
        [descriptionFieldName]: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
        [uploadFileFieldName]: undefined
      },
    ]
  }, [])

  return {
    documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocs;
