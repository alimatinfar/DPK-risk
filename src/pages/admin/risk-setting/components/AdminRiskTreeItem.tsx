import {type ReactNode, useEffect} from 'react';
import type {RiskTreeItemCommonType} from "../index.types.ts";
import ArrowIcon from "../../../../components/svg/ArrowIcon.tsx";
import type {SetStateType} from "../../../../types/SetStateType.ts";
import InputForm from "../../../../components/Form/Input/InputForm.tsx";


type TreeItemProps = {
  selected?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  setWasChanged: SetStateType<boolean>;
  isLast?: boolean;
} & Pick<RiskTreeItemCommonType, 'weight' | 'title' | 'id'>

function AdminRiskTreeItem(
  {
    id, title, weight, selected = false, onClick, children, setWasChanged, isLast
  }: TreeItemProps
) {
  return (
    <div
      onClick={onClick}
      className={`
        w-full rounded-lg p-2 text-right transition-colors ${onClick ? 'cursor-pointer' : ''}
        ${
        selected ? 'bg-slate-100' : `bg-white ${onClick ? 'hover:bg-slate-50' : ''}`
      }
      `}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium text-sm select-none">
          {title}
        </span>

        <div className='flex items-center gap-x-2'>
          <InputForm
            onChangeFromParent={() => setWasChanged(true)}
            inputProps={{
              justNumber: true, hiddenErrorMessage: true, inputLtr: true,
              wrapperClassName: {width: 'w-13.5', height: 'h-10'},
              inputClassName: {textAlign: 'text-center', fontSize: 'text-[13px]'},
              onClick: (e) => e.stopPropagation(),
              hasDotKey: !isLast
            }}
            defaultValue={weight}
            rules={{required: true}}
            fieldName={id}
          />

          {onClick && (
            <ArrowIcon className='rotate-90'/>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

export default AdminRiskTreeItem
