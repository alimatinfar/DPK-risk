import Button from "../../../components/Form/Button/Button.tsx";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import ArrowIcon from "../../../components/svg/ArrowIcon.tsx";
import useResultPersonCategory from "./hooks/useResultPersonCategory.ts";
import ArrowIcon2 from "../../../components/svg/ArrowIcon2.tsx";
import type {ResultPersonCardDataType} from "./ResultCard.types.ts";
import type {ReactNode} from "react";
import type {AnyObjectFields} from "../../../types/AnyObjectFields";
import RenderLogic from "../../../components/others/RenderLogic/RenderLogic.tsx";
import FilterEmptyState from "../../../components/svg/RenderLogic/FilterEmptyState.tsx";
import EmptyState from "../../../components/others/RenderLogic/EmptyState.tsx";
import EmptyStateIcon from "../../../components/svg/RenderLogic/EmptyStateIcon.tsx";

export type ResultPersonCategoryItemType = Pick<ResultPersonCardDataType, 'type'> & AnyObjectFields

export type ResultPersonCategoryProps = {
  personTypeItem: typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS[keyof typeof SEARCH_PAGE_FORM_PERSON_TYPE_KEYS];
  resultData: ResultPersonCategoryItemType[];
  wrapperBackground?: string;
  headerClassName?: string;
  headerBorderBottomClassName?: string;
  CardElement?: (props: {data: ResultPersonCardDataType}) => ReactNode;
  showAllItems?: boolean;
  customContent?: (visibleItems: ResultPersonCategoryItemType[]) => ReactNode;
  emptyStateText?: string;
}

function ResultPersonCategory(
  {
    personTypeItem, resultData, wrapperBackground, headerClassName, headerBorderBottomClassName,
    CardElement, showAllItems, customContent, emptyStateText
  }: ResultPersonCategoryProps
) {

  const {
    open, toggleOpen, dataList, visibleItems, hasLoadMoreButton, loadMoreHandler
  } = useResultPersonCategory({
    resultData, personTypeItem, showAllItems
  })

  return (
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

      {open ? (
        <RenderLogic
          isEmpty={dataList?.length === 0} removeContainer
          emptyElement={(
            <EmptyState
              wrapperPadding='py-4'
              icon={<EmptyStateIcon width='100%' height='120' />}
              title={emptyStateText || 'شخصی یافت نشد'}
            />
          )}
        >
          {
            customContent ? customContent(visibleItems as ResultPersonCardDataType[]) : (
              <div className='flex flex-col p-4'>
                <div className='grid grid-cols-4 gap-4'>
                  {visibleItems.map((item, index) => CardElement ? (
                    <CardElement key={index} data={item as ResultPersonCardDataType}/>
                  ) : null)}
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
            )
          }
        </RenderLogic>
      ) : null}
    </div>
  )
}

export default ResultPersonCategory;
