import type {TabType} from "../Tab.tsx";
import useStateQueryParams from "../../../../hooks/useState/useStateQueryParams.ts";
import QUERY_PARAMS from "../../../../constances/queryParams.ts";


function useActiveTab(defaultState: TabType['id']) {
  const [activeTab, setActiveTab] = useStateQueryParams<TabType['id']>({
    initialState: defaultState,
    queryParamKey: QUERY_PARAMS.ACTIVE_TAB
  })

  return [activeTab, setActiveTab] as const
}

export default useActiveTab;