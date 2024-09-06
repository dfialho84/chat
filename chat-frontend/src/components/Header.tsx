import Image from "next/image";
import logoImage from "@/public/icone_chat.png";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-pallete2 h-20">
            <div className="container m-auto h-full text-pallete3 flex justify-between items-center px-4">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={logoImage}
                            width={50}
                            height={50}
                            alt="Chat Logo"
                            placeholder="empty"
                        />
                    </Link>
                    <Link href="/">
                        <div className="font-extrabold text-3xl ml-4">
                            Chat App
                        </div>
                    </Link>
                </div>
                <ul className="flex divide-x *:px-4 last:*:pr-0 first:*:pl-0 hover:*:text-white">
                    <li>
                        <Link href="/user/register">Register</Link>
                    </li>
                    <li>
                        <Link href="/user/login">Sign in</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
