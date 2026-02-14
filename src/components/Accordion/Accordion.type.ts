import { PropsWithChildren } from "react";

export interface IAccordionProps extends PropsWithChildren {
    title: string,
    isOpen: boolean,
    onToggle: () => void,
    className?: string,
};