import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../index.types.ts";
import {useMemo} from "react";

function useAdminHighRiskIndividualsLettersDetailDocumentsDocs() {

  const documents: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    return [
      {
        id: 1,
        fileType: 'حکم قضایی',
        description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
      },
      {
        id: 2,
        fileType: 'حکم قضایی',
        description: 'حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع حکم دریافت شده از مرجع ',
      },
    ]
  }, [])

  return {
    documents
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDocs;
