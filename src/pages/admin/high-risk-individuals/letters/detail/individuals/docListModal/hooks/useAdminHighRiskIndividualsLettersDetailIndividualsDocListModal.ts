import {useState} from "react";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../../documents/index.types.ts";
import {fileTypeFieldName} from "../../../../../FormFields/FileTypeField/index.constances.ts";
import type {
  AdminHighRiskIndividualsDocListRenderStateType
} from "../index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "../index.constances.ts";
import {descriptionFieldName} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../../FormFields/UploadFileField/index.constances.ts";

function useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal() {

  const [renderState, setRenderState] = useState<AdminHighRiskIndividualsDocListRenderStateType | undefined>(undefined)

  function goToListState() {
    setRenderState(undefined)
  }

  const documentsList: AdminHighRiskIndividualsLettersDetailDocumentType[] = [
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

  const pageTitle = renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE ?
    'حذف مستند' :
    renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT ?
      'ویرایش مستند' : 'لیست مستندات'

  return {
    documentsList, renderState, setRenderState, goToListState, pageTitle
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal;
