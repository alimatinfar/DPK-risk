import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import SelectForm from "../../../../../../components/Form/Select/SelectForm.tsx";
import {LEGAL_TYPE_OPTIONS, legalTypeFieldLabel, legalTypeFieldName} from "./LegalTypeField.constances.ts";


function LegalTypeField() {
  // const requiredErrorMessage = useGetRequiredErrorMessage(legalTypeFieldLabel, true);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalTypeFieldName);

  return (
    <SelectForm
      fieldName={legalTypeFieldName}
      inputProps={{
        errorMessage,
        label: legalTypeFieldLabel,
      }}
      selectProps={{
        options: LEGAL_TYPE_OPTIONS,
      }}
      rules={{
        // required: requiredErrorMessage,
      }}
    />
  );
}

export default LegalTypeField;