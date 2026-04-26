import AccountNumberField from "./formFields/AccountNumberField/AccountNumberField.tsx";
import CustomerNumberField from "./formFields/CustomerNumberField/CustomerNumberField.tsx";
import CardNumberField from "./formFields/CardNumberField/CardNumberField.tsx";
import ShahabNumberField from "./formFields/ShahabNumberField/ShahabNumberField.tsx";


function SearchPageFormSharedFields() {
  return (
    <>
      <AccountNumberField/>

      <CustomerNumberField/>

      <CardNumberField/>

      <ShahabNumberField/>
    </>
  );
}

export default SearchPageFormSharedFields;