import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import type {SearchPageFormDataType, SearchPageFormPersonType} from "./SearchPageForm.types.ts";
import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import PlusIcon from "../../../components/svg/PlusIcon.tsx";
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
    <div className='flex flex-col gap-y-8 bg-primary-background w-full px-25 py-8'>
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
        className='grid grid-cols-4 gap-x-5 gap-y-8'
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

        <div className='flex-center col-span-4'>
          <div className='grid grid-cols-2 w-96 gap-x-5'>
            <Button rightIcon={<SearchIcon textColor='text-white'/>}>
              جستجو
            </Button>

            <Button variant='link' rightIcon={<PlusIcon/>}>
              فیلترهای پیشرفته
            </Button>
          </div>
        </div>
      </ReactHookFormWrapper>
    </div>
  );
}

export default SearchPageForm;