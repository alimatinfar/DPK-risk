import AccountNumberField from "./formFields/AccountNumberField/AccountNumberField.tsx";
import CustomerNumberField from "./formFields/CustomerNumberField/CustomerNumberField.tsx";
import CardNumberField from "./formFields/CardNumberField/CardNumberField.tsx";
import ShahabNumberField from "./formFields/ShahabNumberField/ShahabNumberField.tsx";
import Button from "../../../components/Form/Button/Button.tsx";
import SearchIcon from "../../../components/svg/SearchIcon.tsx";


type Props = {
  loading: boolean;
}

function SearchPageFormSharedFields(
  {loading}: Props
) {
  return (
    <div className='flex items-center gap-x-5'>
      <div className='flex-1 grid grid-cols-4 gap-x-5'>
        <AccountNumberField/>

        <CustomerNumberField/>

        <CardNumberField/>

        <ShahabNumberField/>
      </div>

      <div className='w-45 pt-2.5'>
        <Button
          rightIcon={<SearchIcon textColor='text-white'/>} type='submit' fullWidth
          className={{
            extra: 'h-11'
          }}
          loading={loading}
        >
          جستجو
        </Button>
      </div>
    </div>
  );
}

export default SearchPageFormSharedFields;