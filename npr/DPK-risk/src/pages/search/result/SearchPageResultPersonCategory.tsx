import Button from "../../../components/Form/Button/Button.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import ArrowIcon from "../../../components/svg/ArrowIcon.tsx";
import {useMemo, useState} from "react";
import type {SearchPageResultProps} from "./SearchPageResult.tsx";
import SearchPageResultCard from "./SearchPageResultCard.tsx";


type Props = {
  personTypeItem: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS[keyof typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS]
} & Pick<SearchPageResultProps, 'resultData'>

function SearchPageResultPersonCategory(
  {personTypeItem, resultData}: Props
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

  return (
    <div className='p-4 flex flex-col gap-y-4 rounded-lg bg-[#F2F4F6]'>
      <div
        onClick={toggleOpen}
        className='flex items-center justify-between cursor-pointer'
      >
        <div
          className='flex items-center gap-x-2 cursor-pointe'
        >
          <personTypeItem.icon/>
          <span>
            {`${personTypeItem.label} (${dataList.length})`}
          </span>
        </div>

        <ArrowIcon className={open ? 'rotate-180' : ''}/>
      </div>

      {open && (
        <>
          <div className='grid grid-cols-4 gap-4'>
            {visibleItems.map((item, index) => (
              <SearchPageResultCard key={index} data={item}/>
            ))}
          </div>

          {hasLoadMoreButton && (
            <div className='flex-center'>
              <Button variant='link' size='sm' onClick={loadMoreHandler}>
                نتایج بیشتر
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default SearchPageResultPersonCategory;