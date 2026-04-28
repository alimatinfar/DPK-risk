import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import {useState} from "react";
import SearchPageFormSharedFields from "./SearchPageFormSharedFields.tsx";
import SearchPageFormExtraFields from "./SearchPageFormExtraFields.tsx";
import SearchPageFormSelectPerson from "./SearchPageFormSelectPerson.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import DeleteIcon from "../../../components/svg/DeleteIcon.tsx";


function SearchPageForm() {

  const [activePersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

  function onChangePersonTypeHandler(name: SearchPageFormPersonType) {
    setActivePersonType(prev => {
      if (prev === name) return undefined
      return name
    })
  }

  function onSubmitHandler(formData: SearchPageFormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<SearchPageFormDataType>({
    onSubmitHandler
  })

  function removeAdvancedSearchSection() {
    setActivePersonType(undefined)
  }

  return (//
    <div className='relative z-20 flex flex-col gap-y-8 w-full px-25 py-8'>
      <div className='flex flex-col gap-y-2'>
        <p className='text-2xl font-semibold'>
          سامانه مدیریت ریسک مشتریان
        </p>

        <p className='text-secondary-text text-lg'>
          برای آغاز فرآیند لطفاً اطلاعات مورد نیاز را در پنل جستجو وارد نمایید. در صورت نیاز به اعمال معیارهای دقیق‌تر،
          امکان افزودن فیلترهای اضافی فراهم شده است.
        </p>
      </div>

      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
        className='flex flex-col gap-y-4'
      >
        <SearchPageFormSharedFields />

        <SearchPageFormSelectPerson
          activePersonType={activePersonType}
          setActivePersonType={setActivePersonType}
        />

        <SearchPageFormExtraFields activePersonType={activePersonType} />

        {activePersonType && (
          <div>
            <Button
              variant='link' size='sm' color='red'
              onClick={removeAdvancedSearchSection}
              rightIcon={<DeleteIcon />}
            >
              حذف فیلترهای پیشرفته
            </Button>
          </div>
        )}
      </ReactHookFormWrapper>
    </div>
  );
}

export default SearchPageForm;