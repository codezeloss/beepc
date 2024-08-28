import HeaderLogo from "@/components/HeaderLogo";
import Link from "next/link";
import {ModeToggle} from "@/components/ModeToggle";

export default function Header() {
    return (
        <header className="bg-white dark:bg-neutral-900 py-4 border-b border-b-slate-200/50">
            <div className="container w-full flex gap-5 flex-row items-center justify-between">
                <HeaderLogo/>


                <div className="flex items-center gap-4 sm:gap-6">
                <nav className="hidden md:flex gap-4 sm:gap-6">
                    <Link href="#components">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">Components</p>
                    </Link>
                    <Link href="#order-form">
                        <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 animate-pulse font-semibold">Order Now</p>
                    </Link>
                    <Link href="#why">
                        <p className="text-xs md:text-sm hover:font-semibold font-medium">Why BeePC</p>
                    </Link>
                </nav>

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
