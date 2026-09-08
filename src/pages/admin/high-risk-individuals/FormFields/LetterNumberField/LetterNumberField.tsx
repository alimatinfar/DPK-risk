import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {letterNumberFieldName, letterNumberFieldLabel} from "./index.constances.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";


type Props = {
  isRequired?: boolean;
}

function LetterNumberField(
  {isRequired}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(letterNumberFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(letterNumberFieldLabel)

  return (
    <InputForm
      fieldName={letterNumberFieldName}
      inputProps={{
        errorMessage,
        label: letterNumberFieldLabel,
        placeholder: 'برای مثال 16897651231',
      }}
      rules={{
        ...isRequired && {
          required: requiredErrorMessage
        }
      }}
    />
  );
}

export default LetterNumberField;
