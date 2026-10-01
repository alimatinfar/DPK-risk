import ResultPersonCategory, {type ResultPersonCategoryProps} from "./ResultPersonCategory.tsx";

function ResultPersonCategory2(props: ResultPersonCategoryProps) {
  return (
    <ResultPersonCategory
      wrapperBackground='border border-slate-200 bg-slate-50'
      headerBorderBottomClassName='border-b border-slate-200'
      {...props}
    />
  );
}

export default ResultPersonCategory2;
