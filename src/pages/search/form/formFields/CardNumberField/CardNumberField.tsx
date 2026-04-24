import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {cardNumberFieldLabel, cardNumberFieldName} from "./CardNumberField.constances.ts";

function CardNumberField() {

  const requiredErrorMessage = useGetRequiredErrorMessage(cardNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(cardNumberFieldName);

  return (
    <InputForm
      fieldName={cardNumberFieldName}
      inputProps={{
        errorMessage,
        label: cardNumberFieldLabel,
        placeholder: 'برای مثال 12345789',
      }}
      rules={{
        required: requiredErrorMessage,
      }}
    />
  );
}

export default CardNumberField;