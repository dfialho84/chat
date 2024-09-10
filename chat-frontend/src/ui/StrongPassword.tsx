"use client";
import Input from "./Input";
import usePassword from "./strong-password/usePassword";
import { useEffect } from "react";

type ErrorEvent = {
    error?: string;
};

type ErrorFn = (event: ErrorEvent) => void;

type StringPasswordParams = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    name: string;
    inputRef: React.Ref<HTMLInputElement>;
    onError: ErrorFn;
};

export default function StringPassword(props: Readonly<StringPasswordParams>) {
    const [errors, passwordLevel, updatePw] = usePassword();

    useEffect(() => {
        if (!errors || errors.length === 0) {
            props.onError({});
        } else {
            props.onError({ error: errors[0] });
        }
    }, [errors]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updatePw(event.target.value);
        props.onChange(event);
    };

    return (
        <div className="flex flex-col relative">
            <Input
                type="password"
                autoComplete="new password"
                onChange={handleChange}
                onBlur={props.onBlur}
                name={props.name}
                ref={props.inputRef}
                className="flex-1 pl-[120px]"
            />
            <div
                className={`absolute left-0 top-0 ${passwordLevel.color} text-white rounded-l-md py-1 px-2 w-28 text-center`}
            >
                {passwordLevel.text}
            </div>
        </div>
    );
}
