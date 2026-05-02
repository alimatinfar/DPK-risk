import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {
  comprehensiveForeignNationalsIdFieldLabel,
  comprehensiveForeignNationalsIdFieldName
} from "./ComprehensiveForeignNationalsIdField.constances.ts";
import FORM_PATTERNS from "../../../../../../constances/form/formPatterns.ts";

const SPECIFIC_LENGTH = 12

function ComprehensiveForeignNationalsIdField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(comprehensiveForeignNationalsIdFieldName);

  return (
    <InputForm
      fieldName={comprehensiveForeignNationalsIdFieldName}
      inputProps={{
        errorMessage,
        label: comprehensiveForeignNationalsIdFieldLabel,
        placeholder: 'برای مثال 666644445555',
        maxLength: SPECIFIC_LENGTH,
      }}
      rules={{
        minLength: FORM_PATTERNS.SPECIFIC_LENGTH_CHAR(SPECIFIC_LENGTH)
      }}
    />
  );
}

export default ComprehensiveForeignNationalsIdField;