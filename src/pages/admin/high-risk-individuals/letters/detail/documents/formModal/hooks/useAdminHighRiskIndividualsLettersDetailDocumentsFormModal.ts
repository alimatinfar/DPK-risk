import {fileTypeFieldName} from "../../../../../FormFields/FileTypeField/index.constances.ts";
import {
  descriptionFieldName,
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsFormModal.tsx";
import {useEffect} from "react";
import setDefaultValuesFromObject
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import type {AdminHighRiskIndividualsDocumentFormDataType} from "../../../../../FormFields/AdminHighRiskIndividualsDocumentFormFields/index.types.ts";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";
import type {ModalProps} from "../../../../../../../../components/others/Modal/Modal.tsx";
import {REQUEST_HEADERS} from "../../../../../../../../request/utils/requestHeaders.ts";
import getSelectIdValue from "../../../../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import {uploadFileFieldName} from "../../../../../FormFields/UploadFileField/index.constances.ts";

type Props = Pick<ModalProps, 'onClose'> & Pick<AdminHighRiskIndividualsLettersDetailDocumentsFormModalProps, 'modalState'>

function useAdminHighRiskIndividualsLettersDetailDocumentsFormModal(
  {modalState, onClose}: Props
) {
  const {
    mutate, isPending
  } = useMutateData<any, FormData>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_ADD_DOCUMENT,
      method: 'POST',
      headers: REQUEST_HEADERS.MULTIPART_FORM_DATA
    }
  })

  function onSubmitHandler(formData: AdminHighRiskIndividualsDocumentFormDataType) {

    const bodyData = new FormData()
    bodyData.append("LetterId", (modalState && modalState !== true) ? String(modalState?.id) : '')
    bodyData.append("DocumentType", String(getSelectIdValue(formData[fileTypeFieldName])))
    // bodyData.append("Name", '')
    bodyData.append("Description", formData[descriptionFieldName])
    bodyData.append("Content", formData[uploadFileFieldName]?.data)

    mutate(bodyData, {
      onSuccess: (data) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  const {
    onSubmit, formMethods
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  useEffect(function () {
    if (typeof modalState === 'boolean') return

    const defaultValues = {
      [fileTypeFieldName]: modalState?.fileType,
      [descriptionFieldName]: modalState?.description,
      // TODO should set file as default value
    }
    setDefaultValuesFromObject({
      defaultValues, setValue: formMethods.setValue
    })
  }, [modalState])

  return {
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsFormModal;
