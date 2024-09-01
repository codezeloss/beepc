import Link from "next/link";
import {Facebook, Linkedin, Twitter} from "lucide-react";
import HeaderLogo from "@/components/HeaderLogo";
import {Button} from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-neutral-900 py-6 border-t border-t-slate-200/50 pb-20">
            <div className="container mx-auto">
               <HeaderLogo/>

                <div className="flex items-center gap-x-4 mt-4 mb-8">
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Button type="button" variant='ghost' className="p-0 hover:bg-transparent">
                        <Linkedin className="size-5"/>
                        </Button>
                    </Link>
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Button type="button" variant='ghost' className="p-0 hover:bg-transparent"><Facebook className="size-5"/></Button>
                    </Link>
                    <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                        <Button type="button" variant='ghost' className="p-0 hover:bg-transparent"><Twitter className="size-5"/></Button>
                    </Link>
                </div>

                <p className="text-xs text-neutral-400 ">@All rights reserved.
                    BeePC {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
