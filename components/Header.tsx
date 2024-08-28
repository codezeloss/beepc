import HeaderLogo from "@/components/HeaderLogo";
import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";

export default function Header() {
    return (
        <header className="bg-white dark:bg-neutral-900 px-4 py-4 lg:px-14 border-b border-b-slate-200/50">
            <div className="w-full flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
                <HeaderLogo/>


                <div className="flex items-center gap-4 sm:gap-6">
                <nav className="flex gap-4 sm:gap-6">
                    <Link href="#">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">Components</p>
                    </Link>
                    <Link href="#">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">Order Now</p>
                    </Link>
                    <Link href="#">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">About Us</p>
                    </Link>
                    <Link href="#">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">Contact Us</p>
                    </Link>
                </nav>

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
