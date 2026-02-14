import React from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
    size?: "small" | "medium" | "large";
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
}