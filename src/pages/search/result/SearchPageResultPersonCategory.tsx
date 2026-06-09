import Button from "../../../components/Form/Button/Button.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import ArrowIcon from "../../../components/svg/ArrowIcon.tsx";
import type {SearchPageResultProps} from "./SearchPageResult.tsx";
import SearchPageResultCard from "./SearchPageResultCard.tsx";
import useSearchPageResultPersonCategory from "./hooks/useSearchPageResultPersonCategory.ts";
import ArrowIcon2 from "../../../components/svg/ArrowIcon2.tsx";


export type SearchPageResultPersonCategoryProps = {
  personTypeItem: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS[keyof typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS]
} & Pick<SearchPageResultProps, 'resultData'>

function SearchPageResultPersonCategory(
  {personTypeItem, resultData}: SearchPageResultPersonCategoryProps
) {

  const {
    open, toggleOpen, dataList, visibleItems, hasLoadMoreButton, loadMoreHandler
  } = useSearchPageResultPersonCategory({
    resultData, personTypeItem
  })

  return dataList?.length ? (
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
              <Button
                variant='link' size='sm' onClick={loadMoreHandler}
                rightIcon={<ArrowIcon2 className='-rotate-90' />}
              >
                نتایج بیشتر
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  ) : null
}

export default SearchPageResultPersonCategory;
