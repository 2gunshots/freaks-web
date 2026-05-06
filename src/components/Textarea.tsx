"use client";
import TextareaAutosize from "react-textarea-autosize";

interface TextareaProps {
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    required?: boolean;
    minRows?: number;
    maxRows?: number;
}

export default function Textarea({
    name = "message",
    value,
    placeholder,
    onChange,
    className = "w-full z-10 resize-none appearance-none outline-none border-b border-black focus:ring-0 focus:outline-none",
    required = false,
    minRows = 5,
    maxRows,
}: TextareaProps) {
    return (
        <TextareaAutosize
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            minRows={minRows}
            maxRows={maxRows}
            className={className}
            required={required}
        />
    );
}
