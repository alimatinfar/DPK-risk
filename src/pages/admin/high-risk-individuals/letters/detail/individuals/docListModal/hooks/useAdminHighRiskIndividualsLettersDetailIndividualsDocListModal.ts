import {useMemo, useState} from "react";
import type {AdminHighRiskIndividualsLettersDetailDocumentType} from "../../../documents/index.types.ts";
import {fileTypeFieldName} from "../../../../../FormFields/FileTypeField/index.constances.ts";
import type {
  AdminHighRiskIndividualsDocListRenderStateType, AdminHighRiskIndividualsDocListResponseItemType
} from "../index.types.ts";
import {ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS} from "../index.constances.ts";
import {descriptionFieldName} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import {uploadFileFieldName} from "../../../../../FormFields/UploadFileField/index.constances.ts";
import useFetchData from "../../../../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsDocListModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsDocListModal.tsx";


function useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal(
  {
    isCustomer, modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsDocListModalProps, 'isCustomer' | 'modalState'>
) {

  const [renderState, setRenderState] = useState<AdminHighRiskIndividualsDocListRenderStateType | undefined>(undefined)

  function goToListState() {
    setRenderState(undefined)
  }

  // fetch data
  const apiAddress = isCustomer ? APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_GET_DOCUMENTS : APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_GET_DOCUMENTS
  const params = {
    [isCustomer ? 'riskCustomerId' : 'letterId']: typeof modalState !== 'boolean' ? modalState?.id : ''
  }
  const {
    data, isFetching, error
  } = useFetchData<AdminHighRiskIndividualsDocListResponseItemType[]>({
    axiosConfig: {
      url: apiAddress,
      params
    }
  })

  const documentsList: AdminHighRiskIndividualsLettersDetailDocumentType[] = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map(item => ({
      id: item?.id,
      [fileTypeFieldName]: {id: item?.documentType, name: item?.documentTypeTitle},
      [descriptionFieldName]: item?.description,
      //TODO should get from api
      [uploadFileFieldName]: undefined
    }))
  }, [data])

  const pageTitle = renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.DELETE ?
    'حذف مستند' :
    renderState?.state === ADMIN_HIGH_RISK_INDIVIDUALS_DOC_LIST_RENDER_STATE_KEYS.EDIT ?
      'ویرایش مستند' : 'لیست مستندات'

  return {
    documentsList, loading: isFetching, error,
    renderState, setRenderState, goToListState, pageTitle
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsDocListModal;
