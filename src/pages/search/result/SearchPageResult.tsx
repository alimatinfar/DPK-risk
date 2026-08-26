import RenderLogic, {type RenderLogicProps} from "../../../components/others/RenderLogic/RenderLogic.tsx";
import EmptyState from "../../../components/others/RenderLogic/EmptyState.tsx";
import FilterEmptyState from "../../../components/svg/RenderLogic/FilterEmptyState.tsx";
import {ELEMENT_IDS} from "../../../constances/elementIDs.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import SearchPageResultPersonCategory from "./SearchPageResultPersonCategory.tsx";
import {SEARCH_PAGE_MAX_WIDTH, SEARCH_PAGE_PADDING_X} from "../SearchPage.constances.ts";
import type {ResultPersonCardDataType} from "./ResultCard.types.ts";
import EmptyStateIcon from "../../../components/svg/RenderLogic/EmptyStateIcon.tsx";
import SearchPageSkeleton from "../skeleton/SearchPageSkeleton.tsx";
import SearchPageEmptyState from "../SearchPageEmptyState";
import SearchPageEmptyStateAfterFilter from "../SearchPageEmptyStateAfterFilter";
import ResultPersonCategoryWrapper from "./ResultPersonCategoryWrapper.tsx";


export type SearchPageResultProps = {
  resultData: ResultPersonCardDataType[];
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
    <SearchPageEmptyStateAfterFilter />
  ) : (
    <SearchPageEmptyState />
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
        loadingElement={<SearchPageSkeleton />}
      >
        <div className={'flex flex-col gap-y-8 py-4'}>
          <p className='text-sm text-secondary-text'>
            {resultData.length} نتیجه یافت شد
          </p>

          <ResultPersonCategoryWrapper renderCallback={item => (
            <SearchPageResultPersonCategory
              key={item.name} personTypeItem={item} resultData={resultData}
            />
          )} />
        </div>
      </RenderLogic>
    </div>
  );
}

export default SearchPageResult;
