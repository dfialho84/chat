import Image from "next/image";
import logoImage from "@/public/icone_chat.png";

export default function Header() {
    return (
        <header className="bg-pallete2 h-20">
            <div className="container m-auto h-full text-pallete3 flex justify-between items-center px-4">
                <div className="flex items-center">
                    <Image
                        src={logoImage}
                        width={50}
                        height={50}
                        alt="Chat Logo"
                        placeholder="empty"
                    />
                    <div className="font-extrabold text-3xl ml-4">Chat App</div>
                </div>
                <ul className="flex divide-x *:px-4 last:*:pr-0 first:*:pl-0 hover:*:text-white">
                    <li>Register</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </header>
    );
}
