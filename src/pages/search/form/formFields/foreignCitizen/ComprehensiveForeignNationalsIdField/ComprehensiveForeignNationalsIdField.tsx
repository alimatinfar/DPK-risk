import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {
  comprehensiveForeignNationalsIdFieldLabel,
  comprehensiveForeignNationalsIdFieldName
} from "./ComprehensiveForeignNationalsIdField.constances.ts";


function ComprehensiveForeignNationalsIdField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(comprehensiveForeignNationalsIdFieldName);

  return (
    <InputForm
      fieldName={comprehensiveForeignNationalsIdFieldName}
      inputProps={{
        errorMessage,
        label: comprehensiveForeignNationalsIdFieldLabel,
        placeholder: 'برای مثال 12345789',
      }}
    />
  );
}

export default ComprehensiveForeignNationalsIdField;