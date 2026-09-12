import AnnouncingReferenceField from "../AnnouncingReferenceField/AnnouncingReferenceField.tsx";
import LetterNumberField from "../LetterNumberField/LetterNumberField.tsx";
import LetterDateField from "../LetterDateField/LetterDateField.tsx";
import DescriptionField from "../DescriptionField/DescriptionField.tsx";
import ExpireDateField from "../ExpireDateField/ExpireDateField.tsx";
import RiskListTypeField from "../RiskListTypeField/RiskListTypeField.tsx";
import RequestReasonField from "../../../inquiry-histories/FormFields/RequestReasonField/RequestReasonField.tsx";
import ResponseSubmissionStatusField
  from "../../../inquiry-histories/FormFields/ResponseSubmissionStatusField/ResponseSubmissionStatusField.tsx";


type Props = {
  descriptionClassName?: string;
  descriptionCustomFieldName?: string;
  initialEntry?: boolean;
  isInquiryHistory?: boolean
}

function AdminHighRiskIndividualsBaseFormFields(
  {
    descriptionClassName, descriptionCustomFieldName, initialEntry, isInquiryHistory
  }: Props
) {
  return (
    <>
      <AnnouncingReferenceField isRequired />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      {isInquiryHistory ? (
        <>
          <RequestReasonField isRequired />

          <ResponseSubmissionStatusField isRequired />
        </>
      ) : initialEntry ? (
        <>
          <RiskListTypeField />

          <ExpireDateField/>
        </>
      ) : null}

      <div className={descriptionClassName || ''}>
        <DescriptionField maxLength={250} isNotRequired customFieldName={descriptionCustomFieldName} />
      </div>
    </>
  );
}

export default AdminHighRiskIndividualsBaseFormFields;
