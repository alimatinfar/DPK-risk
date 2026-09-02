import AnnouncingReferenceField from "../AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterNumberField from "../LetterNumberField/LetterNumberField.tsx";
import LetterDateField from "../LetterDateField/LetterDateField.tsx";
import DescriptionField from "../DescriptionField/DescriptionField.tsx";
import ExpireDateField from "../ExpireDateField/ExpireDateField.tsx";
import RiskListTypeField from "../RiskListTypeField/RiskListTypeField.tsx";


type Props = {
  descriptionClassName?: string;
  descriptionCustomFieldName?: string;
  initialEntry?: boolean;
}

function AdminHighRiskIndividualsBaseFormFields(
  {
    descriptionClassName, descriptionCustomFieldName, initialEntry
  }: Props
) {
  return (
    <>
      <AnnouncingReferenceField isRequired />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      {initialEntry ? (
        <>
          <RiskListTypeField />

          <ExpireDateField/>
        </>
      ) : null}

      <div className={descriptionClassName || ''}>
        <DescriptionField customFieldName={descriptionCustomFieldName} />
      </div>
    </>
  );
}

export default AdminHighRiskIndividualsBaseFormFields;
