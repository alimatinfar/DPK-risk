import {useEffect} from "react";
import {
  requestReasonFieldName,
} from "../../FormFields/RequestReasonField/index.constances.ts";
import {
  responseSubmissionStatusFieldName,
} from "../../FormFields/ResponseSubmissionStatusField/index.constances.ts";
import {
  announceReferenceFieldName,
} from "../../../high-risk-individuals/FormFields/AnnouncingReferenceField/index.constances.ts";
import {
  letterNumberFieldName,
} from "../../../high-risk-individuals/FormFields/LetterNumberField/index.constances.ts";
import {
  letterDateFieldName,
} from "../../../high-risk-individuals/FormFields/LetterDateField/index.constances.ts";
import {
  descriptionFieldName,
} from "../../../high-risk-individuals/FormFields/DescriptionField/index.constances.ts";
import setDefaultValuesFromObject
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import parseJalaliDateToMomentFromResponse
  from "../../../../../utils/dateAndTIme/momentJalaliDateTime/parseJalaliDateToMomentFromResponse.ts";
import useReactHookFormWrapper
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {AdminInquiryHistoriesFormDataType} from "../../form/index.types.ts";
import type {
  AdminInquiryHistoryDetailDocumentsEditLetterModalProps
} from "../AdminInquiryHistoryDetailDocumentsEditLetterModal.tsx";
import useMutateData from "../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import toastPromise from "../../../../../utils/toastPromise.ts";
import {useParams} from "react-router";
import getSelectIdValue from "../../../../../components/Form/Select/utils/getSelectIdValue.ts";
import getBodyDataDateField from "../../../../../request/utils/getBodyDataDateField.ts";
import type {SelectOptionType} from "../../../../../components/Form/Select/select-exports.ts";
import fireResponseErrorToast from "../../../../../request/utils/fireResponseErrorToast.ts";


type BodyDataType = {
  id: string | number | undefined | null;
  letterRef: SelectOptionType['id'] | null;
  reson: SelectOptionType['id'] | null;
  letterNo: string;
  letterDate: number | null;
  description: string;
  status: SelectOptionType['id'] | null;
}

type FormDataType = AdminInquiryHistoriesFormDataType['step1']

function useAdminInquiryHistoryDetailDocumentsEditLetterModal(
  {
    responseData, onClose, refetch
  }: Pick<AdminInquiryHistoryDetailDocumentsEditLetterModalProps,
    'responseData' | 'onClose' | 'refetch'
  >
) {

  const {id: letterId} = useParams()

  const {
    mutate, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_INQUIRY_HISTORIES_EDIT, method: 'POST'
    }
  })

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  function onSubmitHandler(formData: FormDataType) {
    const bodyData: BodyDataType = {
      id: letterId ? Number(letterId) : null,
      letterRef: getSelectIdValue(formData?.[announceReferenceFieldName]),
      reson: getSelectIdValue(formData?.[requestReasonFieldName]),
      letterNo: formData?.[letterNumberFieldName],
      letterDate: getBodyDataDateField(formData?.[letterDateFieldName]),
      description: formData?.[descriptionFieldName],
      status: getSelectIdValue(formData?.[responseSubmissionStatusFieldName]),
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        toastPromise().then(toast => toast.success('ویرایش نامه با موفقیت انجام شد'))
        refetch()
        onClose()
      },
      ...fireResponseErrorToast()
    })
  }


  // set default data
  useEffect(() => {
    const letterData = responseData?.data?.letter
    if (!letterData) return

    const defaultValues = {
      [requestReasonFieldName]: {
        id: letterData?.reson, name: letterData?.resonTitle
      },
      [responseSubmissionStatusFieldName]: {
        id: letterData?.status, name: letterData?.statusTitle
      },
      [announceReferenceFieldName]: {
        id: letterData?.letterRef, name: letterData?.letterRefTitle
      },
      [letterNumberFieldName]: letterData?.letterNo,
      [letterDateFieldName]: parseJalaliDateToMomentFromResponse(letterData?.letterDate),
      [descriptionFieldName]: letterData?.description,
    }

    setDefaultValuesFromObject({
      setValue: formMethods.setValue,
      defaultValues
    })
  }, [responseData]);

  return {
    formMethods, onSubmit, loading: isPending
  }
}

export default useAdminInquiryHistoryDetailDocumentsEditLetterModal;
