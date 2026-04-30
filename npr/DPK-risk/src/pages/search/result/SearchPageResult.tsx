import RenderLogic from "../../../components/others/RenderLogic/RenderLogic.tsx";
import EmptyState from "../../../components/others/RenderLogic/EmptyState.tsx";
import FilterEmptyState from "../../../components/svg/RenderLogic/FilterEmptyState.tsx";
import {ELEMENT_IDS} from "../../../constances/elementIDs.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import SearchPageResultPersonCategory from "./SearchPageResultPersonCategory.tsx";
import {SEARCH_PAGE_PADDING_X} from "../SearchPage.constances.ts";
import type {SearchPageResultCardDataType} from "./SearchPageResult.types.ts";


export type SearchPageResultProps = {
  resultData: SearchPageResultCardDataType[]
}

function SearchPageResult(
  {resultData}: SearchPageResultProps
) {
  return (
    <div
      id={ELEMENT_IDS.SEARCH_RESULT}
      className={`${SEARCH_PAGE_PADDING_X}`}
    >
      <RenderLogic
        isEmpty={resultData?.length === 0}
        emptyElement={(
          <EmptyState
            icon={<FilterEmptyState/>}
            title='داده‌ای برای نمایش وجود ندارد!'
            description='جهت نمایش اطلاعات، ابتدا فیلترهای جستجو را تکمیل و جستجو کنید'
          />
        )}
      >
        <div className={'flex flex-col gap-y-8 py-4'}>
          <p className='text-sm text-secondary-text'>
            {resultData.length} نتیجه یافت شد
          </p>

          <div className='flex flex-col gap-y-4'>
            {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(item => (
              <SearchPageResultPersonCategory
                key={item.name} personTypeItem={item} resultData={resultData}
              />
            ))}
          </div>
        </div>
      </RenderLogic>
    </div>
  );
}

export default SearchPageResult;