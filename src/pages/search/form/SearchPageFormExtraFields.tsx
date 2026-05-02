import type {SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "./SearchPageForm.constances.ts";
import type {ReactNode} from "react";
import SearchPageFormNaturalFields from "./SearchPageFormNaturalFields.tsx";
import SearchPageFormLegalFields from "./SearchPageFormLegalFields.tsx";
import SearchPageFormForeignCitizenFields from "./SearchPageFormForeignCitizenFields.tsx";

const fieldsObject: Record<SearchPageFormPersonType, ReactNode> = {
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name]: <SearchPageFormNaturalFields />,
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: <SearchPageFormLegalFields />,
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name]: <SearchPageFormForeignCitizenFields />,
}

type Props = {
  activePersonType: SearchPageFormPersonType | undefined;
}

function SearchPageFormExtraFields(
  {activePersonType}: Props
) {

  return activePersonType ? (
    <div className='grid grid-cols-4 gap-x-5 gap-y-2'>
      {fieldsObject[activePersonType]}
    </div>
  ) : null;
}

export default SearchPageFormExtraFields;