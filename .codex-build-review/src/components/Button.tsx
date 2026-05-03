export default function Button({
    className,
    text,
    onClick,
}: {
    className?: string;
    text?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`w-fit flex flex-row justify-between items-center gap-5 py-1 pr-1 pl-7 rounded-full bg-black text-white mt-10 ${className}`}
        >
            {text}
            <div className="aspect-square p-1.5 rounded-full bg-background">
                <svg
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    className="size-7 text-black"
                >
                    <path
                        d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
        </button>
    );
}
