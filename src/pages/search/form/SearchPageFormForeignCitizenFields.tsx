import ComprehensiveForeignNationalsIdField
  from "./formFields/foreignCitizen/ComprehensiveForeignNationalsIdField/ComprehensiveForeignNationalsIdField.tsx";
import FirstNameField from "./formFields/natural/FirstNameField/FirstNameField.tsx";
import LastNameField from "./formFields/natural/LastNameField/LastNameField.tsx";
import CitizenshipField from "./formFields/foreignCitizen/CitizenshipField/CitizenshipField.tsx";
import NationalityField from "./formFields/foreignCitizen/NationalityField/NationalityField.tsx";


function SearchPageFormForeignCitizenFields() {
  return (
    <>
      <ComprehensiveForeignNationalsIdField/>

      <FirstNameField/>

      <LastNameField/>

      <NationalityField/>

      <CitizenshipField/>
    </>
  );
}

export default SearchPageFormForeignCitizenFields;