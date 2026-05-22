import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import SelectForm from "../../../../../../components/Form/Select/SelectForm.tsx";
import {LEGAL_TYPE_OPTIONS, legalTypeFieldLabel, legalTypeFieldName} from "./LegalTypeField.constances.ts";
import APIS from "../../../../../../request/constances/apis.ts";


function LegalTypeField() {


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
        // options: LEGAL_TYPE_OPTIONS,
        apiAddress: APIS.GET_LEGAL_TYPES
      }}
      rules={{
        // required: requiredErrorMessage,
      }}
    />
  );
}

export default LegalTypeField;
