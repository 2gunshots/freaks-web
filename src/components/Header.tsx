import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b px-6 md:px-10 lg:px-24 py-4 flex items-center justify-between bg-black text-background select-none">
            <Link href="/">
                <Image
                    src="/images/freaks-white.svg"
                    alt="Freaks Logo"
                    width={80}
                    height={31}
                />
            </Link>
        </header>
    );
}
