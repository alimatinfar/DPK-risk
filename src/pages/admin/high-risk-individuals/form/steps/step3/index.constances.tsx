import type {TabsProps} from "../../../../../../components/others/Tab/Tab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../search/form/SearchPageForm.constances";
import SearchPageFormForeignCitizenFields from "../../../../../search/form/SearchPageFormForeignCitizenFields";
import SearchPageFormLegalFields from "../../../../../search/form/SearchPageFormLegalFields";
import SearchPageFormNaturalFields from "../../../../../search/form/SearchPageFormNaturalFields";


export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS: TabsProps['tabs'] = [
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name,
    title: 'حقیقی'
  },
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name,
    title: 'حقوقی'
  },
  {
    id: SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name,
    title: 'اتباع'
  },
]

export const ADMIN_HIGH_RISK_INDIVIDUALS_FORM_STEP3_TABS_RENDER_OBJECT = {
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name]: (
    <SearchPageFormNaturalFields/>
  ),
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.LEGAL.name]: (
    <SearchPageFormLegalFields hiddenAbbreviationField />
  ),
  [SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.FOREIGN_CITIZEN.name]: (
    <SearchPageFormForeignCitizenFields/>
  ),
}