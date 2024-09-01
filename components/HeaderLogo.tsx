import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
    return (
        <Link href="/" >
                <Image className="text-xs" src="/beepc-logo.svg" alt="BeePC" height={70} width={70}/>
        </Link>
    );
}
