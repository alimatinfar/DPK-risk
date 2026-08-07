import ResultPersonCategory, {type ResultPersonCategoryProps} from "./ResultPersonCategory.tsx";
import SearchPageResultCard from "./SearchPageResultCard.tsx";


export type SearchPageResultPersonCategoryProps = Pick<ResultPersonCategoryProps, 'resultData' | 'personTypeItem'>

function SearchPageResultPersonCategory(
  {personTypeItem, resultData}: SearchPageResultPersonCategoryProps
) {
  return (
    <ResultPersonCategory
      personTypeItem={personTypeItem} resultData={resultData}
      CardElement={SearchPageResultCard}
    />
  )
}

export default SearchPageResultPersonCategory;
