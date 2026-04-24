import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {cardNumberFieldLabel, cardNumberFieldName} from "./CardNumberField.constances.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 16

function CardNumberField() {

  // const requiredErrorMessage = useGetRequiredErrorMessage(cardNumberFieldLabel);
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(cardNumberFieldName);

  return (
    <InputForm
      fieldName={cardNumberFieldName}
      inputProps={{
        errorMessage,
        label: cardNumberFieldLabel,
        placeholder: 'برای مثال 6219861911111111',
      }}
      rules={{
        // required: requiredErrorMessage,
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default CardNumberField;