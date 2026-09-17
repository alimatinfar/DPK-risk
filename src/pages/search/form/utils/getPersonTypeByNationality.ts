import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../SearchPageForm.constances.ts";


type Props = {
  isLegal: boolean;
  nationality: number;
}

function getPersonTypeByNationality(
  {
    isLegal, nationality
  }: Props
) {
  return isLegal ? SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name : nationality === 1 ?
    SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name : SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name
}

export default getPersonTypeByNationality;
