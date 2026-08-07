import {useCallback, useState} from "react";
import Modal, {type ModalProps} from "../../others/Modal/Modal.tsx";
import WheelDateTimePicker from "./WheelDateTimePicker";
import Button from "../Button/Button";
import moment, {type Moment} from "moment-jalaali";
import type {WheelDateTimePickerProps} from "./WheelDateTimePicker.constances";


export type WheelDateTimePickerFormModalProps = {
  title: string;
  wheelPickerProps?: Omit<WheelDateTimePickerProps, 'value' | 'onChange'>;
} & Pick<ModalProps, 'open' | 'onClose'> & Pick<WheelDateTimePickerProps, 'value' | 'onChange'>

function WheelDateTimePickerFormModal(
  {open, onClose, title, wheelPickerProps, value, onChange}: WheelDateTimePickerFormModalProps
) {

  const [temporaryValue, setTemporaryValue] = useState<Moment>(typeof value === 'string' ? moment(value) : value.clone())

  const setValueHandler = useCallback(function () {
    onChange(temporaryValue.clone())
    onClose()
  }, [onChange, temporaryValue, onClose])

  return (
    <Modal
      open={open} onClose={onClose} title={title} width='w-[500px]'
    >
      <div className='flex flex-col gap-4'>
        <WheelDateTimePicker
          value={temporaryValue} onChange={setTemporaryValue}
          {...wheelPickerProps}
        />

        <Button fullWidth onClick={setValueHandler}>
          ثبت
        </Button>
      </div>
    </Modal>
  );
}

export default WheelDateTimePickerFormModal;
