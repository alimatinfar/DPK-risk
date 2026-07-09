import SuspenseRenderLogicDefaultContainer, {type SuspenseRenderLogicDefaultContainerProps} from "./SuspenseRenderLogicDefaultContainer.tsx";

function TableSuspense(
  props: SuspenseRenderLogicDefaultContainerProps
) {
  return (
    <SuspenseRenderLogicDefaultContainer align='items-start' {...props} />
  );
}

export default TableSuspense;
