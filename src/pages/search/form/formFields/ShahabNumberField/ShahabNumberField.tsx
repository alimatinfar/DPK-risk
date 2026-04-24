import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {shahabNumberFieldLabel, shahabNumberFieldName} from "./ShahabNumberField.constances.ts";


function ShahabNumberField() {

  const requiredErrorMessage = useGetRequiredErrorMessage(shahabNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(shahabNumberFieldName);

  return (
    <InputForm
      fieldName={shahabNumberFieldName}
      inputProps={{
        errorMessage,
        label: shahabNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default ShahabNumberField;