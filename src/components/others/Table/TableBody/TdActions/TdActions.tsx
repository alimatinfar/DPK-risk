import React, {useMemo} from "react";
import IconClickable from "../../../Icon/IconClickable";
import Tooltip from "../../../Tooltip/Tooltip";
import TdMore from "./TdMore/TdMore";
import type {DropDownActionType} from "../../../DropDown/DropDownActions/DropDownActions";


export type TdActionType = {
  inMoreActions: boolean,
} & DropDownActionType

type TdActionsProps = {
  list: TdActionType[];
}

function TdActions({list}: TdActionsProps) {

  const rootActionsList = useMemo(() => list.filter((item: TdActionType) => !item.inMoreActions), [list])
  const moreActionsList = useMemo(() => list.filter((item: TdActionType) => item.inMoreActions), [list])

  return (
    <div className='flex items-center justify-end space-x-3 mr-auto'>
      {rootActionsList.map((item: TdActionType, index) => (
        <Tooltip title={item.title}>
          <IconClickable key={index} onClick={item.onClick} className='w-7.5 h-7.5'>
            {item.icon}
          </IconClickable>
        </Tooltip>
      ))}

      <TdMore list={moreActionsList}/>
    </div>
  )
}

export default TdActions