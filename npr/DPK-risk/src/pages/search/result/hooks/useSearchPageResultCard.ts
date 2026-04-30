import {useMemo} from "react";
import {searchPageResultCardSeparatedFieldsNameLabel} from "../SearchPageResultCard.constances.ts";
import type {SearchPageResultCardProps} from "../SearchPageResultCard.tsx";


function useSearchPageResultCard(
  {data}: Pick<SearchPageResultCardProps, 'data'>
) {

  const fields = useMemo(function () {
    return Object.values(searchPageResultCardSeparatedFieldsNameLabel[data.type]).map(item => ({
      label: item.label, value: (data as any)[item.name]
    }))
  }, [data])

  return {
    fields
  }
}

export default useSearchPageResultCard;