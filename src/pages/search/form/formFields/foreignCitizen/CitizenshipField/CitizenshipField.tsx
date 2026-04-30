import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {citizenshipFieldLabel, citizenshipFieldName} from "./CitizenshipField.constances.ts";


function CitizenshipField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(citizenshipFieldName);

  return (
    <InputForm
      fieldName={citizenshipFieldName}
      inputProps={{
        errorMessage,
        label: citizenshipFieldLabel,
        placeholder: 'برای مثال ایران',
      }}
    />
  );
}

export default CitizenshipField;