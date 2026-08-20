import LegalBrandNameField from "./formFields/legal/LegalBrandNameField/LegalBrandNameField.tsx";
import LegalCustomerNameField from "./formFields/legal/LegalCustomerNameField/LegalCustomerNameField.tsx";
import LegalRegistrationNumberField
  from "./formFields/legal/LegalRegistrationNumberField/LegalRegistrationNumberField.tsx";
import LegalTypeField from "./formFields/legal/LegalTypeField/LegalTypeField.tsx";
import RegistrationDateFromField from "./formFields/legal/RegistrationDateFromField/RegistrationDateFromField.tsx";
import RegistrationDateToField from "./formFields/legal/RegistrationDateToField/RegistrationDateToField.tsx";
import LegalAbbreviationField from "./formFields/legal/LegalAbbreviationField/LegalAbbreviationField.tsx";



type Props = {
  hiddenAbbreviationField?: boolean;
}

function SearchPageFormLegalFields(
  {hiddenAbbreviationField}: Props
) {
  return (
    <>
      <LegalRegistrationNumberField />

      <LegalCustomerNameField />

      <LegalBrandNameField />

      {!hiddenAbbreviationField && (
        <LegalAbbreviationField />
      )}

      <LegalTypeField />

      <RegistrationDateFromField />

      <RegistrationDateToField />
    </>
  );
}

export default SearchPageFormLegalFields;