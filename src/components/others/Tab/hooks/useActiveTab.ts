import {useState} from 'react';
import type {TabType} from "../Tab.tsx";


function useActiveTab(defaultState: TabType['id']) {
  const [activeTab, setActiveTab] = useState<TabType['id']>(defaultState)

  return [activeTab, setActiveTab] as const
}

export default useActiveTab;