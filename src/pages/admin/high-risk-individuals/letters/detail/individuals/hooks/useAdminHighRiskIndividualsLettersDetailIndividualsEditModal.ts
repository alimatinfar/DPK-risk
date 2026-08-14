import useReactHookFormWrapper
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import {useEffect, useMemo} from "react";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances.ts";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx";
import {
  expireDateFieldName,
  type ExpireDateFieldType
} from "../../../../FormFields/ExpireDateField/index.constances.ts";
import {
  entryReasonsFieldName,
  type EntryReasonsFieldType
} from "../../../../FormFields/EntryReasonsField/index.constances.ts";
import setDefaultValuesFromObject
  from "../../../../../../../components/Form/FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";

type FormDataType = {
  [expireDateFieldName]: ExpireDateFieldType;
  [entryReasonsFieldName]: EntryReasonsFieldType;
}

function useAdminHighRiskIndividualsLettersDetailIndividualsEditModal(
  {
    modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps, 'modalState'>
) {

  function onSubmitHandler(formData: FormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<FormDataType>({
    onSubmitHandler
  })

  const personTitle = useMemo(function () {
    if (typeof modalState === 'boolean') return ''

    return `${modalState?.name} ${modalState?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name ? '' : modalState?.lastName}`
  }, [modalState])

  useEffect(function () {
    if (typeof modalState === 'boolean') return

    const defaultValues = {
      [expireDateFieldName]: modalState.expireDate,
      [entryReasonsFieldName]: modalState?.entryReasons
    }
    console.log({defaultValues, modalState})
    setDefaultValuesFromObject({
      defaultValues, setValue: formMethods.setValue
    })
  }, [modalState])

  return {
    personTitle, formMethods, onSubmit
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsEditModal;
