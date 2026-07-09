import {type ReactNode, Suspense} from "react";
import RenderLogicDefaultContainer, {type RenderLogicDefaultContainerProps} from "./RenderLogicDefaultContainer.tsx";


export type SuspenseRenderLogicDefaultContainerProps = {
  fallback: ReactNode;
} & Pick<RenderLogicDefaultContainerProps, 'children' | 'align'>

function SuspenseRenderLogicDefaultContainer(
  {fallback, children, align}: SuspenseRenderLogicDefaultContainerProps
) {
  return (
    <Suspense fallback={(
      <RenderLogicDefaultContainer align={align}>
        {fallback}
      </RenderLogicDefaultContainer>
    )}>
      {children}
    </Suspense>
  );
}

export default SuspenseRenderLogicDefaultContainer;
