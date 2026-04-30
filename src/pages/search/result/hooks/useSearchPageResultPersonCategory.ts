import {useMemo, useState} from "react";
import type {SearchPageResultPersonCategoryProps} from "../SearchPageResultPersonCategory.tsx";


function useSearchPageResultPersonCategory(
  {
    resultData, personTypeItem
  }: Pick<SearchPageResultPersonCategoryProps, 'resultData' | 'personTypeItem'>
) {

  const [open, setOpen] = useState(true);

  function toggleOpen() {
    setOpen(prev => !prev)
  }

  const [visibleCount, setVisibleCount] = useState(4)

  function loadMoreHandler() {
    setVisibleCount(prev => prev + 12)
  }

  const dataList = useMemo(function () {
    return resultData.filter(resultItem => resultItem.type === personTypeItem.name)
  }, [resultData, personTypeItem.name])


  const visibleItems = useMemo(function () {
    return dataList.slice(0, visibleCount)
  }, [dataList, visibleCount])

  const hasLoadMoreButton = visibleCount < dataList.length

  return {
    open, toggleOpen, dataList, visibleItems, hasLoadMoreButton, loadMoreHandler
  }
}

export default useSearchPageResultPersonCategory;