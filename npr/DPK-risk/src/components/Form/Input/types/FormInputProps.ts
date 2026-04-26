import type {InputProps} from "./InputProps.ts";

export type FormInputProps = {
  fieldName: string;
  rules?: any;
  inputProps?: Partial<InputProps>;
}