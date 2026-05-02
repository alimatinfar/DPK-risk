import type {TabType} from "./Tab.tsx";
import type {ReactNode} from "react";
import SuspenseLoading from "../Loading/SuspenseLoading.tsx";


type Props = {
  renderObject: Record<TabType['id'], ReactNode>;
  activeTab: TabType['id'];
}

function TabContentRender(
  {renderObject, activeTab}: Props
) {
  return (
    <SuspenseLoading>
      {renderObject[activeTab] || null}
    </SuspenseLoading>
  )
}

export default TabContentRender;