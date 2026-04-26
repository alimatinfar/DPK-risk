import {useCallback, useMemo} from "react";
import useModalOpen from "../../../../hooks/modal/useModalOpen";
import {WHEEL_DATE_TIME_PICKER_MODES} from "../WheelDateTimePicker.constances";
import getFormattedMomentJalaliDateTime
  ,{
  type GetFormattedMomentJalaliDateTimeProps
} from "../../../../utils/dateAndTIme/momentJalaliDateTime/getFormattedMomentJalaliDateTime.ts";
import {useController, useFormContext} from "react-hook-form";
import type {WheelDateTimePickerFormProps} from "../WheelDateTimePickerForm";


function useWheelDateTimePickerForm(
  {
    fieldName, rules, defaultValue, removeCloseIconShouldBeRemoved, wheelPickerProps
  }: Pick<WheelDateTimePickerFormProps,
    'fieldName' | 'rules' | 'defaultValue' | 'removeCloseIconShouldBeRemoved' | 'wheelPickerProps'
  >
) {

  const {
    open: modalOpen, shouldBeRemoved: modalShouldBeRemoved, closeModal, setModalState
  } = useModalOpen(false)

  const {control} = useFormContext();

  const {
    field: {onChange, onBlur, name, value, ref},
  } = useController({
    name: fieldName,
    control,
    rules: rules,
    defaultValue: defaultValue || undefined,
  });


  const openModalHandler = useCallback(function () {
    setModalState(true)
  }, [setModalState])

  const displayCloseIcon = useMemo(function () {
    return value && !removeCloseIconShouldBeRemoved && !rules?.required
  }, [value, removeCloseIconShouldBeRemoved, rules?.required])

  const endAdornmentOnClick = useCallback(function () {
    if (displayCloseIcon) {
      onChange(undefined);
    } else {
      openModalHandler();
    }
  }, [displayCloseIcon, onChange, openModalHandler])

  const inputValue = useMemo(function () {
    const formatType: GetFormattedMomentJalaliDateTimeProps['mode'] =
      wheelPickerProps?.mode === WHEEL_DATE_TIME_PICKER_MODES.TIME ? 'time' :
        wheelPickerProps?.mode === WHEEL_DATE_TIME_PICKER_MODES.DATE ? 'jDate' : 'jDateTime'

    return value ? getFormattedMomentJalaliDateTime({date: value, mode: formatType}) : ''
  }, [value, wheelPickerProps])

  return {
    name, ref, value, endAdornmentOnClick, inputValue, openModalHandler, onBlur,
    modalShouldBeRemoved, onChange, modalOpen, closeModal, displayCloseIcon
  }
}

export default useWheelDateTimePickerForm;