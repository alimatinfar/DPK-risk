import useReactHookFormWrapper
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useEffect} from "react";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx";
import {
  expireDateFieldName,
  type ExpireDateFieldType
} from "../../../../../FormFields/ExpireDateField/index.constances.ts";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../../../../FormFields/EntryReasonsField/index.constances.ts";
import setDefaultValuesFromObject
  from "../../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle
  from "./useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle.ts";
import useMutateData from "../../../../../../../../request/hooks/useMutateData.ts";
import APIS from "../../../../../../../../request/constances/apis.ts";
import type {SelectOptionType} from "../../../../../../../../components/Form/Select/select-exports.ts";
import getBodyDataDateField from "../../../../../../../../request/utils/getBodyDataDateField.ts";
import toastPromise from "../../../../../../../../utils/toastPromise.ts";
import fireResponseErrorToast from "../../../../../../../../request/utils/fireResponseErrorToast.ts";


type BodyDataType = {
  id: number | string;
  resons: SelectOptionType['id'][];
  validityDate: number | string;
}

type FormDataType = {
  [expireDateFieldName]: ExpireDateFieldType;
  [entryReasonsFieldName]: EntryReasonsFieldType;
}

function useAdminHighRiskIndividualsLettersDetailIndividualsEditModal(
  {
    modalState, onClose
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps, 'modalState' | 'onClose'>
) {

  const {
    mutate, error, isPending
  } = useMutateData<any, BodyDataType>({
    axiosConfig: {
      url: APIS.ADMIN_HIGH_RISK_INDIVIDUAL_CUSTOMER_UPDATE, method: 'POST'
    }
  })

  function onSubmitHandler(formData: FormDataType) {

    const reasons = formData?.[entryReasonsFieldName]
    const bodyData: BodyDataType = {
      id: typeof modalState !== "boolean" ? modalState?.riskCustomerId : 0,
      resons: reasons ? reasons?.map(item => item.id) : [],
      validityDate: getBodyDataDateField(formData?.[expireDateFieldName]) || 0
    }

    mutate(bodyData, {
      onSuccess: (data, variables, onMutateResult, context) => {
        toastPromise().then(toast => toast.error('ویرایش با موفقیت انجام شد'))
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

  const {
    personTitle
  } = useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle({
    modalState
  })

  useEffect(function () {
    if (typeof modalState === 'boolean') return

    const defaultValues = {
      // [expireDateFieldName]: modalState.expireDate,
      // [entryReasonsFieldName]: modalState?.entryReasons
    }

    setDefaultValuesFromObject({
      defaultValues, setValue: formMethods.setValue
    })
  }, [modalState])

  return {
    personTitle, formMethods, onSubmit, loading: isPending
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsEditModal;
