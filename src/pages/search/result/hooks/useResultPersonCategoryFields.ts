import {useMemo} from "react";
import type {SearchPageFormPersonType} from "../../form/SearchPageForm.types.ts";
import {customerIdFieldName, type ResultPersonCardDataType} from "../ResultCard.types.ts";
import {useLocation} from 'react-router'
import {customerNumberFieldLabel} from "../../form/formFields/CustomerNumberField/CustomerNumberField.constances.ts";


export type UseResultPersonCategoryFieldsProps = {
  separatedFieldsName: Record<SearchPageFormPersonType, {name: any, label: string}[]>;
  data: ResultPersonCardDataType;
  hasCustomerIdPagesPathname?: string[];
}

function useResultPersonCategoryFields(
  {separatedFieldsName, data, hasCustomerIdPagesPathname}: UseResultPersonCategoryFieldsProps
) {
  const {pathname} = useLocation()

  const fields = useMemo(function () {
    return Object.values(separatedFieldsName[data.type]).map(item => ({
      label: item.label, value: (data as any)[item.name]
    }))
  }, [data])

  const isCalculateCustomerRiskPage = useMemo(function () {
    if (!hasCustomerIdPagesPathname) return false
    return hasCustomerIdPagesPathname.some(item => pathname.includes(item))
  }, [hasCustomerIdPagesPathname, pathname])

  const finalFields = useMemo(function () {
    if (!isCalculateCustomerRiskPage) return fields

    return [
      ...fields,
      {
        label: customerNumberFieldLabel,
        value: data?.[customerIdFieldName]
      }
    ]
  }, [isCalculateCustomerRiskPage, data, fields])

  return {
    fields: finalFields
  }
}

export default useResultPersonCategoryFields;
