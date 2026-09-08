import useModalOpenBoolean from "../../../../hooks/modal/useModalOpenBoolean.ts";
import setDefaultValuesFromObject from "../../FormLayout/ReactHookFormWrapper/utils/setDefaultValuesFromObject.ts";
import useReactHookFormWrapper from "../../FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {FilterFormProps} from "../FilterForm.tsx";
import {useEffect, useMemo} from "react";


type Props = {
  hasNotModal?: boolean;
} & Pick<FilterFormProps<T>, 'filters' | 'setFilters' | 'initialFilterData'>

function useFilterForm<T extends object>(
  {
    filters, setFilters, initialFilterData, hasNotModal
  }: Props
) {
  const {
    closeModalHandler, open: modalOpen, openModalHandler, shouldBeRemoved: modalShouldBeRemoved,
  } = useModalOpenBoolean(false)

  const {formMethods, onSubmit} = useReactHookFormWrapper<T>({
    onSubmitHandler: onFilterHandler,
  })

  function onFilterHandler(data: T) {
    closeModalHandler()
    setFilters({...filters, data, currentPage: 1})
  }

  function setInitialFormData(customDefaultValues: any) {
    setDefaultValuesFromObject({defaultValues: customDefaultValues, setValue: formMethods.setValue})
  }

  function resetFilters() {
    closeModalHandler()
    setInitialFormData(initialFilterData)
    setFilters({
      ...filters,
      data: initialFilterData,
      currentPage: 1
    })
  }

  function setFiltersValuesToInputs() {
    console.log({data: filters.data})
    setInitialFormData(filters.data)
  }

  useEffect(() => {
    if (!modalOpen && !hasNotModal) return
    setFiltersValuesToInputs()
  }, [modalOpen, hasNotModal]);

  const activeFilterCount = useMemo(function () {
    return Object.entries(filters.data as any).filter((([key, value]: any) => {
      return value || value === 0
    })).length
  }, [filters.data])

  return {
    openModalHandler, modalShouldBeRemoved, modalOpen, closeModalHandler,
    onSubmit, formMethods, resetFilters, activeFilterCount
  }
}

export default useFilterForm;
