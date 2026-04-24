import {lazy} from "react";
import CloseIcon from "../../svg/CloseIcon";
import DatePickerIcon from "../../svg/DatePickerIcon.tsx";
import Input from "../Input/Input";
import type {InputProps} from "../Input/types/InputProps";
import type {FormInputProps} from "../Input/types/FormInputProps.ts";
import moment, {type Moment} from "moment-jalaali";

import DisplayModal from "../../others/Modal/DisplayModal.tsx";
import type {WheelDateTimePickerFormModalProps} from "./WheelDateTimePickerFormModal";
import useWheelDateTimePickerForm from "./hooks/useWheelDateTimePickerForm";

const WheelDateTimePickerFormModal = lazy(() => import(
  "./WheelDateTimePickerFormModal"
  ));


export type WheelDateTimePickerFormProps = {
  inputProps?: InputProps;
  defaultValue?: Moment;
  removeCloseIconShouldBeRemoved?: boolean;
} & FormInputProps & Pick<WheelDateTimePickerFormModalProps, 'title' | 'wheelPickerProps'>

function WheelDateTimePickerForm(
  {
    inputProps, wheelPickerProps, fieldName, rules, defaultValue, removeCloseIconShouldBeRemoved,
    title
  }: WheelDateTimePickerFormProps
) {

  const {
    name, ref, value, endAdornmentOnClick, inputValue, openModalHandler, onBlur,
    modalShouldBeRemoved, onChange, modalOpen, closeModal, displayCloseIcon
  } = useWheelDateTimePickerForm({
    wheelPickerProps, removeCloseIconShouldBeRemoved, defaultValue, rules, fieldName
  })

  return (
    <>
      <Input
        name={name}
        inputRef={ref}
        endAdornment={
          inputProps?.disabled ? undefined : displayCloseIcon ?
            (
              <CloseIcon/>
            ) : (
              <DatePickerIcon/>
            )
        }
        {...(!inputProps?.disabled && {
          endAdornmentOnClick,
        })}
        inputLtr
        // onChange={onChangeInputHandler}
        value={inputValue}
        onClick={openModalHandler}
        onBlur={onBlur}
        placeholder={'انتخاب کنید'}
        required={rules?.required}
        {...inputProps}
      />

      <DisplayModal
        shouldBeRemoved={modalShouldBeRemoved}
      >
        <WheelDateTimePickerFormModal
          onChange={onChange} value={value || moment()}
          wheelPickerProps={{
            ...wheelPickerProps
          }}
          open={modalOpen} onClose={closeModal} title={title}
        />
      </DisplayModal>
    </>
  );
}

export default WheelDateTimePickerForm;