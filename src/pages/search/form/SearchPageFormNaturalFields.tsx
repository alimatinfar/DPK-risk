import BirthCertificateNumberField
  from "./formFields/natural/BirthCertificateNumberField/BirthCertificateNumberField.tsx";
import FirstNameField from "./formFields/natural/FirstNameField/FirstNameField.tsx";
import LastNameField from "./formFields/natural/LastNameField/LastNameField.tsx";
import NationalCodeField from "./formFields/natural/NationalCodeField/NationalCodeField.tsx";


function SearchPageFormNaturalFields() {
  return (
    <>
      <NationalCodeField />

      <FirstNameField />

      <LastNameField />

      <BirthCertificateNumberField />
    </>
  );
}

export default SearchPageFormNaturalFields;