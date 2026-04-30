import {useMemo} from "react";
import {searchPageResultCardSeparatedFieldsNameLabel} from "../SearchPageResultCard.constances.ts";
import type {SearchPageResultCardProps} from "../SearchPageResultCard.tsx";
import Ls from "../../../../utils/customLocalStorage.ts";
import LS_KEYS from "../../../../constances/localStorageKeys.ts";
import {useNavigate} from "react-router";
import getFirstSideBarLink from "../../../panel/layout/utils/getFirstSideBarLink.ts";


function useSearchPageResultCard(
  {data}: Pick<SearchPageResultCardProps, 'data'>
) {

  const navigate = useNavigate()

  function onCardClickHandler() {
    Ls.add(LS_KEYS.PERSON_DATA, data)
    navigate(getFirstSideBarLink())
  }

  const fields = useMemo(function () {
    return Object.values(searchPageResultCardSeparatedFieldsNameLabel[data.type]).map(item => ({
      label: item.label, value: (data as any)[item.name]
    }))
  }, [data])

  return {
    fields, onCardClickHandler
  }
}

export default useSearchPageResultCard;