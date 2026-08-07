import SelectForm from "../../../../../components/Form/Select/SelectForm.tsx";
import {
  announceReferenceFieldLabel,
  announceReferenceFieldName,
  announceReferenceFieldOptions
} from "./index.constances.ts";


function AnnouncingReferenceField() {
  return (
    <SelectForm
      fieldName={announceReferenceFieldName}
      inputProps={{
        label: announceReferenceFieldLabel,
      }}
      selectProps={{
        options: announceReferenceFieldOptions
      }}
    />
  );
}

export default AnnouncingReferenceField;
