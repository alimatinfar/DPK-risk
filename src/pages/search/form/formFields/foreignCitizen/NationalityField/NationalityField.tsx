import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {nationalityFieldLabel, nationalityFieldName} from "./NationalityField.constances.ts";


function NationalityField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(nationalityFieldName);

  return (
    <InputForm
      fieldName={nationalityFieldName}
      inputProps={{
        errorMessage,
        label: nationalityFieldLabel,
        placeholder: 'برای مثال افغانستان',
      }}
    />
  );
}

export default NationalityField;