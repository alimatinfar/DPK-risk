export interface IDropdownProps {
    label: string;
    labelRigth?: boolean;
    options: IDropdownOption[];
    selectedValue?: TDropdownValue;
    selectedValues?: TDropdownValue[];
    onSelect: (newSelectedValues: TDropdownValue | TDropdownValue[] | null ) => void;
    placeholder?: string;
    className?: string;
    multiple?: boolean;
    maxSelections?: number;
    error: string | boolean;
    searchable?: boolean;
};

export interface IDropdownOption {
    value: TDropdownValue;
    label: string;
};

export type TDropdownValue = string | number;