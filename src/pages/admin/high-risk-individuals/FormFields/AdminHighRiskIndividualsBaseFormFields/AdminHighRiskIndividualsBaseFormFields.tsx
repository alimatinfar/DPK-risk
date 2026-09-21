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
  isInquiryHistory?: boolean;
  disabledReferenceField?: boolean;
  hiddenResponseSubmissionStatus?: boolean;
}

function AdminHighRiskIndividualsBaseFormFields(
  {
    descriptionClassName, descriptionCustomFieldName, initialEntry, isInquiryHistory, disabledReferenceField,
    hiddenResponseSubmissionStatus
  }: Props
) {
  return (
    <>
      <AnnouncingReferenceField isRequired disabled={disabledReferenceField} />

      <LetterNumberField isRequired />

      <LetterDateField isRequired />

      {isInquiryHistory ? (
        <>
          <RequestReasonField isRequired />

          {!hiddenResponseSubmissionStatus && (<ResponseSubmissionStatusField isRequired />)}
        </>
      ) : initialEntry ? (
        <>
          <RiskListTypeField />

          <ExpireDateField/>
        </>
      ) : null}

      <div className={descriptionClassName || ''}>
        <DescriptionField maxLength={200} isNotRequired customFieldName={descriptionCustomFieldName} />
      </div>
    </>
  );
}

export default AdminHighRiskIndividualsBaseFormFields;
