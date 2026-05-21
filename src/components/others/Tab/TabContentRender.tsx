import type {TabType} from "./Tab.tsx";
import type {ReactNode} from "react";
import SuspenseLoading from "../Loading/SuspenseLoading.tsx";


export type TabContentRenderProps = {
  renderObject: Record<TabType['id'], ReactNode>;
  activeTab: TabType['id'];
}

function TabContentRender(
  {renderObject, activeTab}: TabContentRenderProps
) {
  return (
    <SuspenseLoading>
      {renderObject[activeTab] || null}
    </SuspenseLoading>
  )
}

export default TabContentRender;
