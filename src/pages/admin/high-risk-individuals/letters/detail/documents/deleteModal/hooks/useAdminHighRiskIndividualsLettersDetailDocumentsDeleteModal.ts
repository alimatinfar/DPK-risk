import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../../FormFields/DescriptionField/index.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps
} from "../AdminHighRiskIndividualsLettersDetailDocumentsDeleteModal.tsx";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import type {ModalProps} from "../../../../../../../../components/others/Modal/Modal.tsx";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";


//TODO should added description field to body data
type BodyDataType = {
  documentId: string | number | null;
}

type FormDataType = {
  [descriptionFieldName]: DescriptionFieldType
}

function useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal(
  {
    modalState, onClose
  }: Pick<AdminHighRiskIndividualsLettersDetailDocumentsDeleteModalProps, 'modalState'> &  Pick<ModalProps, 'onClose'>
) {

  const {
    mutate, data, error, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_LETTER_DELETE_DOCUMENT, method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {

    const bodyData: BodyDataType = {
      documentId: modalState && modalState !== true ? modalState?.id : null
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  return {
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailDocumentsDeleteModal;
