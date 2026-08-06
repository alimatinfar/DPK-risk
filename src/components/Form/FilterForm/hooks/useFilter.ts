import QUERY_PARAMS from "../../../../constances/queryParams.ts";
import {useMemo} from "react";
import type {FilterType} from "../index.types.ts";
import useStateQueryParams from "../../../../hooks/useState/useStateQueryParams.ts";
import deepEqual from "../../../../utils/deepEqual.ts";
import type {FilterFormProps} from "../FilterForm.tsx";


export type UseFilterReturnProps<T> = {
  setRowsPerPage: (value: number) => void;
  setCurrentPage: (value: number) => void;
  filtersIsDefault: boolean;
} & Pick<FilterFormProps<T>, 'filters' | 'setFilters'>

type Props<T> = {
  defaultFilterFormData: T;
  defaultCurrentPage?: number;
  defaultRowsPerPage?: number;
  customFilterQueryParam?: string;
}

function useFilter<T extends object>(
  {
    defaultFilterFormData, defaultCurrentPage, defaultRowsPerPage, customFilterQueryParam
  }: Props<T>
): UseFilterReturnProps<T> {

  const initialFilterData = useMemo(() => ({
    data: defaultFilterFormData,
    currentPage: defaultCurrentPage || 1,
    rowsPerPage: defaultRowsPerPage || 10,
  }), [defaultFilterFormData, defaultCurrentPage, defaultRowsPerPage])

  const [filters, setFilters] = useStateQueryParams<FilterType<T>>({
    initialState: initialFilterData,  queryParamKey: customFilterQueryParam || QUERY_PARAMS.FILTERS
  })

  const filtersIsDefault = useMemo(function () {
    return deepEqual(filters, initialFilterData)
  }, [filters, initialFilterData])

  function setCustomFilterHandler(customFilter: Partial<Record<keyof FilterType<T>, any>>) {
    setFilters({...filters, ...customFilter})
  }

  function setRowsPerPage(value: number) {
    setCustomFilterHandler({rowsPerPage: value})
  }

  function setCurrentPage(value: number) {
    setCustomFilterHandler({currentPage: value})
  }
  
  return {
    setRowsPerPage, setCurrentPage, filters, setFilters, filtersIsDefault,
  }
}

export default useFilter
