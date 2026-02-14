export interface ITimeValue {
  hour: number;
  minute: number;
}

export interface ITimePickerProps {
  className?: string;
  is24Hour?: boolean;
  onChange?: (time: ITimeValue) => void;
  initialValue?: string | ITimeValue;
}