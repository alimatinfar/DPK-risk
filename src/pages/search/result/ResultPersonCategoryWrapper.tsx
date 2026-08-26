import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../form/SearchPageForm.constances.ts";
import type {ReactNode} from "react";
import type {SearchPageFormPersonValueType} from "../form/SearchPageForm.types.ts";


type Props = {
  renderCallback: (category: SearchPageFormPersonValueType) => ReactNode
}

function ResultPersonCategoryWrapper(
  {
    renderCallback
  }: Props
) {
  return (
    <div className='flex flex-col gap-y-4'>
      {Object.values(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(renderCallback)}
    </div>
  );
}

export default ResultPersonCategoryWrapper;
