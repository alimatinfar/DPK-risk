import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import WheelDateTimePickerForm from "../../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import {registrationDateToFieldLabel, registrationDateToFieldName} from "./RegistrationDateToField.constances.ts";


function RegistrationDateToField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(registrationDateToFieldName);

  return (
    <WheelDateTimePickerForm
      fieldName={registrationDateToFieldName}
      title={registrationDateToFieldLabel}
      inputProps={{
        label: registrationDateToFieldLabel,
        errorMessage: errorMessage,
      }}
      wheelPickerProps={{
        // mode: 'time'
      }}
    />
  )
}

export default RegistrationDateToField;