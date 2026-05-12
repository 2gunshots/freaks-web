import Image from "next/image";
import Link from "next/link";

export default function Footer({
    backgroundColor,
    color,
    border = true,
}: {
    backgroundColor?: string;
    color?: string;
    border?: boolean;
}) {
    return (
        <footer
            className={`px-6 lg:px-24 py-4 flex flex-col gap-1 md:flex-row items-center justify-between ${backgroundColor || "bg-background"} ${color || "text-foreground"} ${border && "border-t"}`}
        >
            <Link href="/">
                <Image
                    src="/images/freaks-black.svg"
                    alt="Freaks Logo"
                    width={80}
                    height={31}
                />
            </Link>
            <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4 text-xs underline font-inter">
                <Link className="hover-click" href="/about">
                    About
                </Link>
                <Link className="hover-click" href="/help">
                    Help
                </Link>
                <Link className="hover-click" href="/privacy">
                    Privacy Policy
                </Link>
                <Link className="hover-click" href="/terms">
                    Terms & Conditions
                </Link>
                {/* <div>Contact</div> */}
            </div>
        </footer>
    );
}
