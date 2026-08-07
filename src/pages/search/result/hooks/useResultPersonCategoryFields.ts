import {useMemo} from "react";
import type {SearchPageFormPersonType} from "../../form/SearchPageForm.types.ts";
import type {ResultCardDataType} from "../ResultCard.types.ts";


type Props = {
  separatedFieldsName: Record<SearchPageFormPersonType, {name: any, label: string}[]>;
  data: ResultCardDataType;
}

function useResultPersonCategoryFields(
  {separatedFieldsName, data}: Props
) {

  const fields = useMemo(function () {
    return Object.values(separatedFieldsName[data.type]).map(item => ({
      label: item.label, value: (data as any)[item.name]
    }))
  }, [data])

  return {
    fields
  }
}

export default useResultPersonCategoryFields;
