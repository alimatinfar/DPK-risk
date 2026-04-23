import DropDown, {type DropDownProps} from "../DropDown";
import DropDownActionsOptions from "./DropDownActionsOptions";
import type {ChildrenPropsType} from "../../../../types/ChildrenPropsType.tsx";


export type DropDownActionType = {
  onClick: (e?: any) => void;
  icon: ChildrenPropsType['children'];
  title: string;
  titleClass?: string;
}

export type DropDownActionsProps = {
  children: ChildrenPropsType['children'];
  actions: DropDownActionType[];
  minWidth?: string;
  dropDownOpen: DropDownProps['dropDownOpen'];
  setDropDownOpen: DropDownProps['setDropDownOpen'];
  origin?: DropDownProps['origin'];
}

function DropDownActions(
  {actions, children, minWidth, dropDownOpen, setDropDownOpen, origin}: DropDownActionsProps
) {

  const dropDownActions = (
    <DropDownActionsOptions
      {...{actions, minWidth, setDropDownOpen}}
    />
  )

  return (
    <DropDown
      dropDownOpen={dropDownOpen} setDropDownOpen={setDropDownOpen} dropDownElement={dropDownActions}
      origin={origin}
    >
      {children}
    </DropDown>
  )
}

export default DropDownActions