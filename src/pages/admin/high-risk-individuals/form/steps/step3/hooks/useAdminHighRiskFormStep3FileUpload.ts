import {useEffect, useRef} from "react";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import useModalOpenBoolean from "../../../../../../../hooks/modal/useModalOpenBoolean.ts";
import {useWatch} from "react-hook-form";
import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  uploadFileFieldName,
  type UploadFileFieldType
} from "../../../../FormFields/UploadFileField/index.constances.ts";
import downloadFileFromFile from "../../../../../../../utils/fileOperations/downloadFileFromFile.ts";
import type {AdminHighRiskFormStep3FileUploadProps} from "../AdminHighRiskFormStep3FileUpload.tsx";
import {REQUEST_HEADERS} from "../../../../../../../request/utils/requestHeaders.ts";
import base64ToFile from "../../../../../../../utils/fileOperations/base64ToFile.ts";

type FormDataType = {
  [uploadFileFieldName]: UploadFileFieldType;
}

function useAdminHighRiskFormStep3FileUpload(
  {
    uploadApiUrl
  }: Pick<AdminHighRiskFormStep3FileUploadProps, 'uploadApiUrl'>
) {

  const abortControllerRef = useRef<AbortController>(new AbortController())

  const {
    open: modalOpen, openModalHandler, closeModalHandler, shouldBeRemoved
  } = useModalOpenBoolean(false)

  const {
    mutate, isPending: uploadLoading, error,
  } = useMutateData<any, FormData>({
    axiosConfig: {
      url: uploadApiUrl,
      method: 'POST',
      signal: abortControllerRef.current.signal,
      headers: {
        ...REQUEST_HEADERS.MULTIPART_FORM_DATA
      }
    }
  })

  async function onSubmitHandler(formData: FormDataType) {
    openModalHandler()

    const file = base64ToFile({base64Data: formData?.[uploadFileFieldName]?.data, fileName: 'upload-file'})
    const bodyData = new FormData()
    bodyData.append('file', file)

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        closeModalHandler()
        // toastPromise().then(toast => toast.success('درج افراد با موفقیت انجام شد'))
      },
    })
  }

  //download template file

  const {
    mutate: templateFileMutate, isPending: templateFileLoading,
  } = useMutateData<any, any>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_FORM_CUSTOMERS_TEMPLATE_FILE,
      signal: abortControllerRef.current.signal,
      responseType: 'blob',
    }
  })

  function getTemplateFileHandler() {
    templateFileMutate(null, {
      onSuccess: (data, variables, onMutateResult, context) => {
        downloadFileFromFile(data, 'templateFile.xlsx')
      },
    })
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  const uploadedFile = useWatch({control: formMethods.control, name: uploadFileFieldName})

  useEffect(() => {
    if (!uploadedFile) return
    onSubmit().then()
  }, [uploadedFile]);

  function closeUploadModalHandler() {
    closeModalHandler()
    formMethods.reset()
  }

  function cancelRequestHandler() {
    abortControllerRef.current.abort()
    closeUploadModalHandler()
  }

  return {
    formMethods, onSubmit, modalOpen, closeUploadModalHandler, error, cancelRequestHandler, uploadLoading,
    getTemplateFileHandler, templateFileLoading
  }
}

export default useAdminHighRiskFormStep3FileUpload;
