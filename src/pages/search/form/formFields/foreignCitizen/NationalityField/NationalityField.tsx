import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import {nationalityFieldLabel, nationalityFieldName} from "./NationalityField.constances.ts";
import APIS from "../../../../../../request/constances/apis.ts";
import SelectForm from "../../../../../../components/Form/Select/SelectForm.tsx";


function NationalityField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(nationalityFieldName);

  return (
    <SelectForm
      fieldName={nationalityFieldName}
      inputProps={{
        errorMessage,
        label: nationalityFieldLabel,
      }}
      selectProps={{
        apiAddress: APIS.GET_NATIONALITIES
      }}
      rules={{
        // required: requiredErrorMessage,
      }}
    />
  );
}

export default NationalityField;
