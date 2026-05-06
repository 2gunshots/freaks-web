import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b px-6 md:px-10 lg:px-24 py-5 flex items-center justify-between bg-black text-background select-none">
            <Link href="/">
                <h3 className="font-gloock text-3xl select-none">Freaks</h3>
            </Link>
        </header>
    );
}
