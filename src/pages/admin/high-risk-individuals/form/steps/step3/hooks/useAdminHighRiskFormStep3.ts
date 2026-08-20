import useActiveTab from "../../../../../../../components/others/Tab/hooks/useActiveTab";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "../../../../../../search/form/SearchPageForm.constances";


function useAdminHighRiskFormStep3() {

  const [activeTab, setActiveTab] = useActiveTab(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS.NATURAL.name)



  return {
    activeTab, setActiveTab
  }
}

export default useAdminHighRiskFormStep3;