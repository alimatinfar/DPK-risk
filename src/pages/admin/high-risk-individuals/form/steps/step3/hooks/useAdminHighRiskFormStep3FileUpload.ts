import {useEffect, useRef} from "react";
import useMutateData from "../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../request/constances/apis.ts";
import toastPromise from "../../../../../../../utils/toastPromise.ts";
import useModalOpenBoolean from "../../../../../../../hooks/modal/useModalOpenBoolean.ts";
import {useWatch} from "react-hook-form";
import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  uploadFileFieldName,
  type UploadFileFieldType
} from "../../../../FormFields/UploadFileField/index.constances.ts";

type BodyDataType = {}

type FormDataType = {
  [uploadFileFieldName]: UploadFileFieldType;
}

function useAdminHighRiskFormStep3FileUpload() {

  const abortControllerRef = useRef<AbortController>(new AbortController())

  const {
    open: modalOpen, openModalHandler, closeModalHandler, shouldBeRemoved
  } = useModalOpenBoolean(false)

  const {
    mutate, isPending: uploadLoading, error,
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_UPLOAD_EXCEL_CUSTOMERS,
      method: 'POST',
      signal: abortControllerRef.current.signal
    }
  })

  function onSubmitHandler(formData: FormDataType) {
    openModalHandler()

    console.log({formData})
    const bodyData: BodyDataType = {}

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        closeModalHandler()
        toastPromise().then(toast => toast.error('درج افراد با موفقیت انجام شد'))
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
    formMethods, onSubmit, modalOpen, closeUploadModalHandler, error, cancelRequestHandler, uploadLoading
  }
}

export default useAdminHighRiskFormStep3FileUpload;
