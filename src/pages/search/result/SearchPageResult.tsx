import RenderLogic, {type RenderLogicProps} from "../../../components/others/RenderLogic/RenderLogic.tsx";
import EmptyState from "../../../components/others/RenderLogic/EmptyState.tsx";
import FilterEmptyState from "../../../components/svg/RenderLogic/FilterEmptyState.tsx";
import {ELEMENT_IDS} from "../../../constances/elementIDs.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import SearchPageResultPersonCategory from "./SearchPageResultPersonCategory.tsx";
import {SEARCH_PAGE_MAX_WIDTH, SEARCH_PAGE_PADDING_X} from "../SearchPage.constances.ts";
import type {SearchPageResultCardDataType} from "./SearchPageResult.types.ts";
import EmptyStateIcon from "../../../components/svg/RenderLogic/EmptyStateIcon.tsx";


export type SearchPageResultProps = {
  resultData: SearchPageResultCardDataType[];
  formIsSubmitted: boolean;
  error: RenderLogicProps['error'];
  loading: boolean;
}

function SearchPageResult(
  {
    resultData, formIsSubmitted, error, loading
  }: SearchPageResultProps
) {

  const emptyElement = formIsSubmitted ? (
    <EmptyState
      icon={<EmptyStateIcon/>}
      title='نتيجه اي يافت نشد !'
      description='لطفاً فیلترهای اعمال‌شده را بررسی کرده و در صورت نیاز، شرایط جستجو را تغییر دهید.'
    />
  ) : (
    <EmptyState
      icon={<FilterEmptyState/>}
      title='داده‌ای برای نمایش وجود ندارد!'
      description='جهت نمایش اطلاعات، ابتدا فیلترهای جستجو را تکمیل و جستجو کنید'
    />
  )

  return (
    <div
      id={ELEMENT_IDS.SEARCH_RESULT}
      className={`${SEARCH_PAGE_PADDING_X} ${SEARCH_PAGE_MAX_WIDTH}`}
    >
      <RenderLogic
        isEmpty={resultData?.length === 0}
        emptyElement={emptyElement}
        error={error}
        isLoading={loading}
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