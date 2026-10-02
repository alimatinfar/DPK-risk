import ResultPersonCategory, {type ResultPersonCategoryProps} from "./ResultPersonCategory.tsx";

function ResultPersonCategory2(props: ResultPersonCategoryProps) {
  return (
    <ResultPersonCategory
      wrapperBackground='border border-slate-200 bg-slate-50 dark:border-dark-2 dark:bg-dark-1'
      headerBorderBottomClassName='border-b border-slate-200 dark:border-dark-2'
      {...props}
    />
  );
}

export default ResultPersonCategory2;
