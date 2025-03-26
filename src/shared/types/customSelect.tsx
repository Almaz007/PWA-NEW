export interface Option {
    value: string;
    label: string;
}

export interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
}
