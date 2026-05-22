import useGetFormErrorMessage
  from "../../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import InputForm from "../../../../../../components/Form/Input/InputForm.tsx";
import {legalAbbreviationFieldLabel, legalAbbreviationFieldName} from "./LegalAbbreviationField.constances.ts";


function LegalAbbreviationField() {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(legalAbbreviationFieldName);

  return (
    <InputForm
      fieldName={legalAbbreviationFieldName}
      inputProps={{
        errorMessage,
        label: legalAbbreviationFieldLabel,
        placeholder: 'برای مثال MCI',
      }}
    />
  );
}

export default LegalAbbreviationField;
