import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {descriptionFieldLabel, descriptionFieldName} from "./index.constances.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import {type InputProps} from "../../../../../components/Form/Input/types/InputProps";


type Props = Pick<InputProps, 'placeholder'>

function DescriptionField(
  {placeholder}: Props
) {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(descriptionFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(descriptionFieldLabel)

  return (
    <InputForm
      fieldName={descriptionFieldName}
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
