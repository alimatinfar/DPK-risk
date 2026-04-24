import ReactHookFormWrapper from "../../../components/Form/FormLayout/ReactHookFormWrapper/ReactHookFormWrapper.tsx";
import useReactHookFormWrapper
  from "../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useReactHookFormWrapper.ts";
import AccountNumberField from "./formFields/AccountNumberField/AccountNumberField.tsx";
import CustomerNumberField from "./formFields/CustomerNumberField/CustomerNumberField.tsx";
import CardNumberField from "./formFields/CardNumberField/CardNumberField.tsx";
import ShahabNumberField from "./formFields/ShahabNumberField/ShahabNumberField.tsx";
import type {SearchPageFormDataType} from "./SearchPageForm.types.ts";
import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";
import PlusIcon from "../../../components/svg/PlusIcon.tsx";


function SearchPageForm() {

  function onSubmitHandler(formData: SearchPageFormDataType) {
    console.log({formData})
  }

  const {
    formMethods, onSubmit
  } = useReactHookFormWrapper<SearchPageFormDataType>({
    onSubmitHandler
  })

  return (
    <div className='flex flex-col gap-y-8 bg-primary-background w-full px-25 py-8'>
      <div className='flex flex-col gap-y-2'>
        <p className='text-2xl font-semibold'>
          سامانه مدیریت ریسک مشتریان
        </p>

        <p className='text-secondary-text text-lg'>
          برای آغاز فرآیند لطفاً  اطلاعات مورد نیاز را در پنل جستجو وارد نمایید. در صورت نیاز به اعمال معیارهای دقیق‌تر، امکان افزودن فیلترهای اضافی فراهم شده است.
        </p>
      </div>

      <ReactHookFormWrapper
        formMethods={formMethods} onSubmit={onSubmit}
        className='grid grid-cols-4 gap-x-5 gap-y-8'
        >
        <AccountNumberField />

        <CustomerNumberField />

        <CardNumberField />

        <ShahabNumberField />

        <div className='flex-center col-span-4'>
          <div className='grid grid-cols-2 w-96 gap-x-5'>
            <Button rightIcon={<SearchIcon textColor='text-white' />}>
              جستجو
            </Button>

            <Button variant='link' rightIcon={<PlusIcon />}>
              فیلترهای پیشرفته
            </Button>
          </div>
        </div>
      </ReactHookFormWrapper>
    </div>
  );
}

export default SearchPageForm;