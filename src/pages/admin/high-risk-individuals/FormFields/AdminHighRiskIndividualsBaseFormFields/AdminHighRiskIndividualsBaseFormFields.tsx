import AnnouncingReferenceField from "../AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterNumberField from "../LetterNumberField/LetterNumberField.tsx";
import LetterDateField from "../LetterDateField/LetterDateField.tsx";
import DescriptionField from "../DescriptionField/DescriptionField.tsx";
import {exitCitingTheLetterDescriptionFieldName} from "../../letters/detail/individuals/exitModal/index.constances.ts";


type Props = {
  descriptionClassName?: string
}

function AdminHighRiskIndividualsBaseFormFields(
  {
    descriptionClassName
  }: Props
) {
  return (
    <>
      <AnnouncingReferenceField isRequired />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      <div className={descriptionClassName || ''}>
        <DescriptionField customFieldName={exitCitingTheLetterDescriptionFieldName} />
      </div>
    </>
  );
}

export default AdminHighRiskIndividualsBaseFormFields;
