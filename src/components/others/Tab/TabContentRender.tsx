import type {TabType} from "./Tab.tsx";
import {type ReactNode, Suspense} from "react";
import SuspenseLoading from "../Loading/SuspenseLoading.tsx";


export type TabContentRenderProps = {
  renderObject: Record<TabType['id'], {
    render: ReactNode;
    suspenseLoading: ReactNode;
  }>;
  activeTab: TabType['id'];
}

function TabContentRender(
  {renderObject, activeTab}: TabContentRenderProps
) {

  const activeItem = renderObject[activeTab]
  const activeRender = activeItem?.render || null

  return activeItem?.suspenseLoading ? (
    <Suspense fallback={activeItem.suspenseLoading}>
      {activeRender}
    </Suspense>
  ) : (
    <SuspenseLoading>
      {activeRender}
    </SuspenseLoading>
  )
}

export default TabContentRender;
