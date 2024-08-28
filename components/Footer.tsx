import Link from "next/link";
import {Facebook, Linkedin, Twitter} from "lucide-react";
import HeaderLogo from "@/components/HeaderLogo";

export default function Footer() {
    return (
        <div className="bg-white dark:bg-neutral-900 px-6 py-6 lg:px-14 border-t border-t-slate-200/50 pb-20">
            <div className="mx-auto">
               <HeaderLogo/>


                <div className="flex items-center gap-x-4 mt-4 mb-8">
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Linkedin className="size-5"/>
                    </Link>
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Facebook className="size-5"/>
                    </Link>
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Twitter className="size-5"/>
                    </Link>
                </div>

                <p className="text-xs text-neutral-400 ">@All rights reserved.
                    BeePC {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}
