import AnnouncingReferenceField from "./AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterNumberField from "./LetterNumberField/LetterNumberField.tsx";
import LetterDateField from "./LetterDateField/LetterDateField.tsx";
import DescriptionField from "./DescriptionField/DescriptionField.tsx";
import {exitCitingTheLetterDescriptionFieldName} from "../letters/detail/individuals/exitModal/index.constances.ts";

function AdminHighRiskIndividualsBaseFormFields() {
  return (
    <>
      <AnnouncingReferenceField isRequired />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      <DescriptionField customFieldName={exitCitingTheLetterDescriptionFieldName} />
    </>
  );
}

export default AdminHighRiskIndividualsBaseFormFields;
