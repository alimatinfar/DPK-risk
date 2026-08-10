import ResultPersonCategory, {type ResultPersonCategoryProps} from "./ResultPersonCategory.tsx";

function ResultPersonCategory2(props: ResultPersonCategoryProps) {
  return (
    <ResultPersonCategory
      wrapperBackground='border border-gray-200 bg-gray-50'
      headerBorderBottomClassName='border-b border-gray-200'
      {...props}
    />
  );
}

export default ResultPersonCategory2;
