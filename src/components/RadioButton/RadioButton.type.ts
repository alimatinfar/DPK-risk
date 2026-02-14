export interface IRadioOption {
  value: string | number;
  label: string;
}

export interface IRadioButtonProps {
  label?: string;
  options: IRadioOption | IRadioOption[];
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  className?: string;
  labelRight?: boolean;
  required?: boolean;
}
