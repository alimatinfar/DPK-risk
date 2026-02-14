export interface IBreadcrumbProps {
    Items: IBreadcrumbItem[];
}

export interface IBreadcrumbItem {
    title: string;
    onClick?: () => void;
}