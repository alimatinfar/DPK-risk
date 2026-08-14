import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {descriptionFieldLabel, descriptionFieldName} from "./index.constances.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import {type InputProps} from "../../../../../components/Form/Input/types/InputProps";


type Props = {
  customFieldName?: string;
} & Pick<InputProps, 'placeholder'>

function DescriptionField(
  {placeholder, customFieldName}: Props
) {

  const fieldName = customFieldName || descriptionFieldName

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(fieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(descriptionFieldLabel)

  return (
    <InputForm
      fieldName={fieldName}
      inputProps={{
        errorMessage,
        label: descriptionFieldLabel,
        rows: 5,
        placeholder: placeholder || descriptionFieldLabel,
      }}
      rules={{
        required: requiredErrorMessage
      }}
    />
  );
}

export default DescriptionField;
