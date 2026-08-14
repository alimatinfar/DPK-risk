import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import {
  announceReferenceFieldLabel,
  announceReferenceFieldName,
  announceReferenceFieldOptions
} from "./index.constances.ts";
import type {InputProps} from "../../../../../components/Form/Input/types/InputProps.ts";
import useGetFormErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetFormErrorMessage.ts";
import useGetRequiredErrorMessage
  from "../../../../../components/Form/FormLayout/ReactHookFormWrapper/hooks/useGetRequiredErrorMessage.ts";


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
        options: announceReferenceFieldOptions
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
