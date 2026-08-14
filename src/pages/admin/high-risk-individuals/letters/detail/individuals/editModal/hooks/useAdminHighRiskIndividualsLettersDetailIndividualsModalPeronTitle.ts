import {useMemo} from "react";
import type {
  AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps
} from "../AdminHighRiskIndividualsLettersDetailIndividualsEditModal.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../../search/form/SearchPageForm.constances.ts";

function useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle(
  {
    modalState
  }: Pick<AdminHighRiskIndividualsLettersDetailIndividualsEditModalProps, 'modalState'>
) {

  const personTitle = useMemo(function () {
    if (typeof modalState === 'boolean') return ''

    return `${modalState?.name} ${modalState?.type === SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name ? '' : modalState?.lastName}`
  }, [modalState])

  return {
    personTitle
  }
}

export default useAdminHighRiskIndividualsLettersDetailIndividualsModalPeronTitle;
