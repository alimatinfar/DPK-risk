import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import {customerNameFieldLabel, customerNameFieldName} from "./index.constances.ts";

type Props = {
  isRequired?: boolean;
}

function CustomerNameField(
  {isRequired}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(customerNameFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(customerNameFieldLabel)


  return (
    <InputForm
      fieldName={customerNameFieldName}
      inputProps={{
        errorMessage,
        label: customerNameFieldLabel,
        placeholder: 'برای مثال علی امینی',
      }}
      rules={{
        ...isRequired && {
          required: requiredErrorMessage
        }
      }}
    />
  );
}

export default CustomerNameField;
