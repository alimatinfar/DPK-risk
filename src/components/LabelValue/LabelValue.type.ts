import React from "react";

export interface ILabelValueProps {
    label: React.ReactNode;
    value?: React.ReactNode;
    labelClassName?: string;
    valueClassName?: string;
    containerClassName?: string;
    separator?: string;
    hasBgColor:boolean;
}