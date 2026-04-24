import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {
  registrationDateFromFieldLabel,
  registrationDateFromFieldName
} from "../RegistrationDateFromField/RegistrationDateFromField.constances.ts";
import WheelDateTimePickerForm from "../../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";


function RegistrationDateToField() {

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

export default RegistrationDateToField;