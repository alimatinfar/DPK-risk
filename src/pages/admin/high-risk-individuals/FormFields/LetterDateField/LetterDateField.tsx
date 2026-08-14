import {letterFromDateFieldLabel, letterFromDateFieldName} from "../LetterFromDateField/index.constances.ts";
import WheelDateTimePickerForm from "../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import type {InputProps} from "../../../../../components/Form/Input/types/InputProps.ts";
import {letterDateFieldLabel, letterDateFieldName} from "./index.constances.ts";


type Props = {
  customFieldName?: string;
  customLabel?: InputProps['label'];
  isRequired?: boolean
}

function LetterDateField(
  {customFieldName, customLabel, isRequired}: Props
) {

  const fieldName = customFieldName || letterDateFieldName
  const label = customLabel || letterDateFieldLabel

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(fieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(label)

  return (
    <WheelDateTimePickerForm
      fieldName={fieldName}
      title={label}
      inputProps={{
        label: label,
        errorMessage
      }}
      wheelPickerProps={{
        mode: 'date'
      }}
      rules={{
        ...isRequired && {
          required: requiredErrorMessage
        }
      }}
    />
  );
}

export default LetterDateField;
