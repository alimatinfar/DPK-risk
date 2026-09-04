import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import InputForm from "../../../../../components/Form/Input/InputForm.tsx";
import {inquiryNumberFieldLabel, inquiryNumberFieldName} from "./index.constances.ts";

type Props = {
  isRequired?: boolean;
}

function InquiryNumberField(
  {isRequired}: Props
) {
  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(inquiryNumberFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(inquiryNumberFieldLabel)

  return (
    <InputForm
      fieldName={inquiryNumberFieldName}
      inputProps={{
        errorMessage,
        label: inquiryNumberFieldLabel,
        placeholder: 'برای مثال 16897651231',
        justNumber: true
      }}
      rules={{
        ...isRequired && {
          required: requiredErrorMessage
        }
      }}
    />
  );
}

export default InquiryNumberField;
