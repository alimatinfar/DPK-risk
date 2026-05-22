import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {citizenshipFieldLabel, citizenshipFieldName} from "./CitizenshipField.constances.ts";
import SelectForm from "../../../../../../components/Form/Select/SelectForm.tsx";


function CitizenshipField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(citizenshipFieldName);

  return (
    <SelectForm
      fieldName={citizenshipFieldName}
      inputProps={{
        errorMessage,
        label: citizenshipFieldLabel,
      }}
      selectProps={{
        options: []
        // apiAddress: APIS.GET_LEGAL_TYPES
      }}
    />
  );
}

export default CitizenshipField;
