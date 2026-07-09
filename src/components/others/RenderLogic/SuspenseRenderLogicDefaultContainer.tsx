import {type ReactNode, Suspense} from "react";
import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";
import RenderLogicDefaultContainer from "./RenderLogicDefaultContainer.tsx";


type Props = {
  fallback: ReactNode
} & Pick<ChildrenAndClassNamePropsType, 'children'>

function SuspenseRenderLogicDefaultContainer(
  {fallback, children}: Props
) {
  return (
    <Suspense fallback={(
      <RenderLogicDefaultContainer>
        {fallback}
      </RenderLogicDefaultContainer>
    )}>
      {children}
    </Suspense>
  );
}

export default SuspenseRenderLogicDefaultContainer;
