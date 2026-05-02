import WheelDateTimePickerForm from "../../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {registrationDateFromFieldLabel, registrationDateFromFieldName} from "./RegistrationDateFromField.constances.ts";


function RegistrationDateFromField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(registrationDateFromFieldName);

  return (
    <WheelDateTimePickerForm
      fieldName={registrationDateFromFieldName}
      title={registrationDateFromFieldLabel}
      inputProps={{
        label: registrationDateFromFieldLabel,
        errorMessage: errorMessage,
      }}
      wheelPickerProps={{
        // mode: 'time'
      }}
    />
  )
}

export default RegistrationDateFromField;