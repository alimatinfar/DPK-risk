import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {nationalCodeFieldLabel, nationalCodeFieldName} from "./index.constances.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import FORM_PATTERNS from "../../../../../constances/form/formPatterns.ts";


const MIN_LENGTH = 5
const MAX_LENGTH = 12

function NationalCodeField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(nationalCodeFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(nationalCodeFieldLabel)

  return (
    <InputForm
      fieldName={nationalCodeFieldName}
      inputProps={{
        errorMessage,
        label: nationalCodeFieldLabel,
        placeholder: 'برای مثال 0065432107',
        maxLength: MAX_LENGTH,
        justNumber: true
      }}
      rules={{
        minLength: FORM_PATTERNS.MIN_LENGTH_CHAR(MIN_LENGTH, `باید بیشتر از ${MIN_LENGTH} عدد باشد`),
        required: requiredErrorMessage,
      }}
    />
  );
}

export default NationalCodeField;
