import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-pallete1">
            <div className="container m-auto h-32 bg-pallete1 text-pallete3 flex flex-col items-center py-10 justify-center">
                <div>Developed by Diego Fialho Rodrigues</div>
                <div className="flex justify-center *:mx-2 mt-4">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/diego-fialho/"
                    >
                        <FaLinkedin size={40} />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:dfialho84@gmail.com"
                    >
                        <TfiEmail size={40} />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/dfialho84"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}
