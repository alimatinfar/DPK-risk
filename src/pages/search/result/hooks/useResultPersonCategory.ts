import {useMemo, useState} from "react";
import type {ResultPersonCategoryProps} from "../ResultPersonCategory.tsx";


function useResultPersonCategory(
  {
    resultData, personTypeItem, showAllItems
  }: Pick<ResultPersonCategoryProps, 'resultData' | 'personTypeItem' | 'showAllItems'>
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
    return showAllItems ? dataList : dataList.slice(0, visibleCount)
  }, [dataList, visibleCount, showAllItems])

  const hasLoadMoreButton = visibleCount < dataList.length

  return {
    open, toggleOpen, dataList, visibleItems, hasLoadMoreButton, loadMoreHandler
  }
}

export default useResultPersonCategory;
