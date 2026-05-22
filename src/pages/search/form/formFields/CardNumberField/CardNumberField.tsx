import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {cardNumberFieldLabel, cardNumberFieldName} from "./CardNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 16

function CardNumberField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(cardNumberFieldName);

  return (
    <InputForm
      fieldName={cardNumberFieldName}
      inputProps={{
        errorMessage,
        label: cardNumberFieldLabel,
        placeholder: 'برای مثال 6037991234567890',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default CardNumberField;
