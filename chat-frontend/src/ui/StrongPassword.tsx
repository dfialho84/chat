"use client";
import Input from "./Input";
import { MdOutlineErrorOutline } from "react-icons/md";
import usePassword from "./strong-password/usePassword";

export default function StringPassword() {
    const [errors, passwordLevel, updatePw] = usePassword();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updatePw(event.target.value);
    };

    return (
        <div className="flex flex-col relative">
            <Input
                type="password"
                autoComplete="new password"
                onChange={handleChange}
                className="flex-1 pl-[120px]"
            />
            <div
                className={`absolute left-0 top-0 ${passwordLevel.color} text-white rounded-l-md py-1 px-2 w-28 text-center`}
            >
                {passwordLevel.text}
            </div>
            {errors && (
                <ul className="text-red-500 text-sm mb-4">
                    {errors.map((error, index) => {
                        return (
                            <li key={index} className="">
                                <MdOutlineErrorOutline className="inline-block align-text-bottom" />
                                <span>{error}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
