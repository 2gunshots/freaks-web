import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 lg:px-24 py-5 border-t flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <h3 className="font-gloock text-3xl">Freaks</h3>
            </Link>
            <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4 text-xs underline md:text-sm">
                <Link className="hover-click" href="/about">
                    About
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
