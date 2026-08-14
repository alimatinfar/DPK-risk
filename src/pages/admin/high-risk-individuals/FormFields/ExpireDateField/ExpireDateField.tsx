import WheelDateTimePickerForm from "../../../../../components/Form/WheelDateTimePicker/WheelDateTimePickerForm.tsx";
import {expireDateFieldName, expireDateFieldLabel} from "./index.constances.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";

function ExpireDateField() {

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(expireDateFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(expireDateFieldLabel)

  return (
    <WheelDateTimePickerForm
      fieldName={expireDateFieldName}
      title={expireDateFieldLabel}
      inputProps={{
        label: expireDateFieldLabel,
        errorMessage
      }}
      rules={{
        required: requiredErrorMessage
      }}
      wheelPickerProps={{
        mode: 'date'
      }}
    />
  );
}

export default ExpireDateField;
