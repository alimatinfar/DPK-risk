import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import {useState} from "react";
import {SEARCH_PAGE_FORM_PERSON_TYPE_KEYS} from "./SearchPageForm.constances.ts";
import SearchPageFormSharedFields from "./SearchPageFormSharedFields.tsx";
import SearchPageFormExtraFields from "./SearchPageFormExtraFields.tsx";


function SearchPageForm() {

  const [actionPersonType, setActivePersonType] = useState<SearchPageFormPersonType | undefined>(undefined)

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

        <div className='col-span-4 w-80 grid grid-cols-3 gap-4 mx-auto'>
          {Object.entries(SEARCH_PAGE_FORM_PERSON_TYPE_KEYS).map(([key, value]) => (
            <div
              onClick={() => onChangePersonTypeHandler(value.name)}
              className={`
                px-4 py-2 text-center cursor-pointer  duration-200 rounded-lg border select-none
                ${actionPersonType === value.name ? 'border-primary text-primary bg-primary/10' : 'hover:bg-gray-200 border-gray-300'}
              `}
              key={key}
            >
              {value.label}
            </div>
          ))}
        </div>

        <SearchPageFormExtraFields activePersonType={actionPersonType} />

      </ReactHookFormWrapper>
    </div>
  );
}

export default SearchPageForm;