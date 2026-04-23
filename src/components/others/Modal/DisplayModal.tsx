import type {ChildrenAndClassNamePropsType} from "../../../types/ChildrenPropsType.tsx";
import SuspenseOverContainerLoading from "../Loading/SuspenseOverContainerLoading.tsx";

type Props = {
  shouldBeRemoved?: boolean;
} & Pick<ChildrenAndClassNamePropsType, 'children'>

function DisplayModal({shouldBeRemoved, children}: Props) {
  return (
    <SuspenseOverContainerLoading>
      {shouldBeRemoved ? null : children}
    </SuspenseOverContainerLoading>
  )
}

export default DisplayModal