import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import {useMemo} from "react";
import {fileTypeFieldOptions} from "../../../../FormFields/FileTypeField/index.constances.ts";

function useAdminHighRiskIndividualsLettersDetailDocumentsDocs() {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    return [
      {
        id: 1,
        fileType: fileTypeFieldOptions[0],
        description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
        fileData: undefined
      },
      {
        id: 2,
        fileType: fileTypeFieldOptions[0],
        description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
        fileData: undefined
      },
    ]
  }, [])

  return {
    documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocs;
