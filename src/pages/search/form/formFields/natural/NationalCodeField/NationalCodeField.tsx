import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {nationalCodeFieldLabel, nationalCodeFieldName} from "./NationalCodeField.constances.ts";


function NationalCodeField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(nationalCodeFieldName);

  return (
    <InputForm
      fieldName={nationalCodeFieldName}
      inputProps={{
        errorMessage,
        label: nationalCodeFieldLabel,
        placeholder: 'برای مثال 123457890',
      }}
    />
  );
}

export default NationalCodeField;