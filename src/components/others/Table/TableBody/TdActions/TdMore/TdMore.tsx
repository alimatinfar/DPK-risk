import React, {useState} from "react";
import MoreIcon from "../../../../../svg/MoreIcon.tsx";
import DropDownActions, {
  type DropDownActionsProps,
  type DropDownActionType
} from "../../../../DropDown/DropDownActions/DropDownActions.tsx";
import IconClickable from "../../../../Icon/IconClickable.tsx";


export type TdMoreProps = {
  list: DropDownActionsProps['actions']
}

function TdMore({list}: TdMoreProps) {

  const [dropDownOpen, setDropDownOpen] = useState(false);


  function onClickHandler(item:DropDownActionType) {
    setDropDownOpen(false)
    item.onClick()
  }

  const mappedList = list.map(item => ({
    ...item,
    onClick: () => onClickHandler(item)
  }))

  return !list || list?.length === 0 ? null : (
    <DropDownActions
      actions={mappedList} dropDownOpen={dropDownOpen} setDropDownOpen={setDropDownOpen} origin='left'
    >
      <IconClickable className='w-7.5 h-7.5'>
        <MoreIcon />
      </IconClickable>
    </DropDownActions>
  )
}

export default TdMore