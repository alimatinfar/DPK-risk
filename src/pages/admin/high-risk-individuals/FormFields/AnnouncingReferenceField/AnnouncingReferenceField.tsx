import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import {
  announceReferenceFieldLabel,
  announceReferenceFieldName
} from "./index.constances.ts";
import type {InputProps} from "../../../../../components/Form/Input/types/InputProps.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";
import APIS from "../../../../../request/constances/apis.ts";


type Props = {
  customLabel?: InputProps['label'];
  isRequired?: boolean;
}

function AnnouncingReferenceField(
  {customLabel, isRequired}: Props
) {

  const label = customLabel || announceReferenceFieldLabel

  const getErrorMessage = useGetFormErrorMessage();
  const errorMessage = getErrorMessage(announceReferenceFieldName);
  const requiredErrorMessage = useGetRequiredErrorMessage(label)

  return (
    <SelectForm
      fieldName={announceReferenceFieldName}
      inputProps={{
        label,
        errorMessage
      }}
      selectProps={{
        apiAddress: APIS.GET_LETTER_REFERENCES
      }}
      rules={{
        ...isRequired && {
          required: requiredErrorMessage
        }
      }}
    />
  );
}

export default AnnouncingReferenceField;
