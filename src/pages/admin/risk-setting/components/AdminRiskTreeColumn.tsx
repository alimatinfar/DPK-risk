import AdminRiskTreeItem from "./AdminRiskTreeItem.tsx";
import type {RiskTreeItemCommonType} from "../index.types.ts";
import {useEffect, useState} from "react";
import Button from "../../../../components/Form/Button/Button.tsx";
import InputErrorMessage from "../../../../components/Form/Input/InputErrorMessage.tsx";
import EmptyState from "../../../../components/others/RenderLogic/EmptyState.tsx";
import SettingEmptyStateIcon from "../../../../components/svg/RenderLogic/SettingEmptyStateIcon.tsx";
import ReactHookFormWrapper from "../../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {RiskSelectedStateType} from "../hooks/useAdminRiskTree.ts";



type Props = {
  items: RiskTreeItemCommonType[];
  selectedId?: RiskSelectedStateType;
  onSelect?: (item: RiskTreeItemCommonType) => void;
  isLast?: boolean;
  isEmptyState?: boolean;
  title: string;
  previousLevelTitle?: string;
  previousSelectedId?: RiskSelectedStateType;
}

function AdminRiskTreeColumn(
  {
    selectedId, items, onSelect, isLast, isEmptyState, title, previousLevelTitle, previousSelectedId
  }: Props
) {

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper({
    onSubmitHandler
  })

  function onSubmitHandler(formData: any) {
    console.log({formData})
  }

  const [wasChanged, setWasChanged] = useState(false)
  const [hasError, setHasError] = useState(true)

  function cancelHandler() {
    setWasChanged(false)
    formMethods.reset()
  }

  useEffect(() => {
    cancelHandler()
  }, [previousSelectedId]);

  return (
    <div className={`
      flex flex-col gap-y-2 min-h-[calc(100vh-95px)]
      ${isLast ? '' : 'pl-4 ml-4 border-l border-slate-200'}
    `}>
      <p className='text-slate-500 text-sm'>
        {title}
      </p>

      <div className={`
      flex flex-col gap-y-4 flex-1
      ${isEmptyState ? 'justify-center flex-1' : 'justify-between'}
    `}>
        {isEmptyState ? (
          <EmptyState
            icon={<SettingEmptyStateIcon/>}
            title={`برای ویرایش ${title}‌ها ابتدا ${previousLevelTitle} خود را انتخاب کنید`}
          />
        ) : (
          <ReactHookFormWrapper
            formMethods={formMethods} onSubmit={onSubmit} className='flex-1 flex flex-col justify-between'
          >
            <div className='flex flex-col gap-y-2'>
              {items.map(item => (
                <AdminRiskTreeItem
                  key={item.id} setWasChanged={setWasChanged}
                  id={item.id} title={item.title} weight={item.weight} selected={item.id === selectedId}
                  {...onSelect && {onClick: () => onSelect(item)}} isLast={isLast}
                />
              ))}
            </div>

            {wasChanged && (
              <div className='flex flex-col gap-y-2'>
                {hasError && (
                  <div className='bg-red-50 p-2 rounded-lg'>
                    <InputErrorMessage errorMessage='مجموع شاخص های اصلی باید 100 باشد'/>
                  </div>
                )}

                <div className='grid grid-cols-2 gap-2'>
                  <Button variant='default' color='white' fullWidth onClick={cancelHandler}>
                    انصراف
                  </Button>

                  <Button type='submit' fullWidth>
                    ذخیره
                  </Button>
                </div>
              </div>
            )}
          </ReactHookFormWrapper>
        )}
      </div>
    </div>
  );
}

export default AdminRiskTreeColumn;
