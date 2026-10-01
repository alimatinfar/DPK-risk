import {searchPageResultCardSeparatedFieldsNameLabel} from "../SearchPageResultCard.constances.ts";
import type {SearchPageResultCardProps} from "../SearchPageResultCard.tsx";
import Ls from "../../../../utils/customLocalStorage.ts";
import LS_KEYS from "../../../../constances/localStorageKeys.ts";
import {useNavigate} from "react-router";
import getFirstPanelSideBarLink from "../../../panel/layout/utils/getFirstPanelSideBarLink.ts";
import useResultPersonCategoryFields, {
  type UseResultPersonCategoryFieldsProps
} from "./useResultPersonCategoryFields.ts";


function useSearchPageResultCard(
  {
    data, hasCustomerIdPagesPathname
  }: Pick<UseResultPersonCategoryFieldsProps, 'data' | 'hasCustomerIdPagesPathname'>
) {

  const navigate = useNavigate()

  function onCardClickHandler() {
    Ls.add(LS_KEYS.PERSON_DATA, data)
    navigate(getFirstPanelSideBarLink())
  }

  const {fields} = useResultPersonCategoryFields({
    separatedFieldsName: searchPageResultCardSeparatedFieldsNameLabel,
    data, hasCustomerIdPagesPathname
  })

  return {
    fields, onCardClickHandler
  }
}

export default useSearchPageResultCard;
