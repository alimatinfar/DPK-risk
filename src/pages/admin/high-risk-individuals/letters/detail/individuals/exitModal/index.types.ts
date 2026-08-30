import {
  exitReasonTypeFieldName,
  type ExitReasonTypeFieldType
} from "../../../../FormFields/ExitReasonTypeField/index.constances.ts";
import {
  descriptionFieldName,
  type DescriptionFieldType
} from "../../../../FormFields/DescriptionField/index.constances.ts";
import {exitByUserMistakeDescriptionFieldName} from "./index.constances.ts";

export type ExitCustomerFormDataType = {
  [exitReasonTypeFieldName]: ExitReasonTypeFieldType;
  [exitByUserMistakeDescriptionFieldName]: DescriptionFieldType;
}
