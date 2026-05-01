import type {TabType} from "./Tab.tsx";
import type {ReactNode} from "react";


type Props = {
  renderObject: Record<TabType['id'], ReactNode>;
  activeTab: TabType['id'];
}

function TabContentRender(
  {renderObject, activeTab}: Props
) {
  return renderObject[activeTab] || null
}

export default TabContentRender;