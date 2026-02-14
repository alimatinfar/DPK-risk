import { InputHTMLAttributes } from "react";

export interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelRigth: boolean;
    placeholder: string;
    value: string | number;
    error?: string;
    handleInputChange: (value: any) => void;
    className?: string;
    minLength?: number;
    maxLength?: number;
    regexPattern?: string;
    separator?: string;
}