export interface INumberButtonProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}