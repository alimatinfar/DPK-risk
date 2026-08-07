import Button from "../../../components/Form/Button/Button.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import ArrowIcon from "../../../components/svg/ArrowIcon.tsx";
import SearchPageResultCard from "./SearchPageResultCard.tsx";
import useResultPersonCategory from "./hooks/useResultPersonCategory.ts";
import ArrowIcon2 from "../../../components/svg/ArrowIcon2.tsx";
import type {ResultCardDataType} from "./ResultCard.types.ts";
import type {ReactNode} from "react";


export type ResultPersonCategoryProps = {
  personTypeItem: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS[keyof typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS];
  resultData: ResultCardDataType[];
  wrapperBackground?: string;
  headerClassName?: string;
  headerBorderBottomClassName?: string;
  CardElement: (props: {data: ResultCardDataType}) => ReactNode;
}

function ResultPersonCategory(
  {
    personTypeItem, resultData, wrapperBackground, headerClassName, headerBorderBottomClassName,
    CardElement
  }: ResultPersonCategoryProps
) {

  const {
    open, toggleOpen, dataList, visibleItems, hasLoadMoreButton, loadMoreHandler
  } = useResultPersonCategory({
    resultData, personTypeItem
  })

  return dataList?.length ? (
    <div className={`
      flex flex-col rounded-lg overflow-hidden ${wrapperBackground || 'bg-[#F2F4F6]'}
    `}>
      <div
        onClick={toggleOpen}
        className={`
          flex items-center justify-between cursor-pointer p-4 overflow-hidden select-none
          ${(open ? headerBorderBottomClassName : '') || ''} ${headerClassName || ''}
        `}
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
        <div className='flex flex-col p-4'>
          <div className='grid grid-cols-4 gap-4'>
            {visibleItems.map((item, index) => (
              <CardElement key={index} data={item}/>
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
        </div>
      )}
    </div>
  ) : null
}

export default ResultPersonCategory;
