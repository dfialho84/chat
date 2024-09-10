import { MdOutlineErrorOutline } from "react-icons/md";

type FieldControlParams = {
    label: string;
    children: React.ReactNode;
    error?: string;
};

export default function FieldControl({
    label,
    children,
    error,
}: Readonly<FieldControlParams>) {
    return (
        <>
            <label>{label}</label>
            {children}
            {error && (
                <div className="text-red-500 text-sm mb-4">
                    <MdOutlineErrorOutline className="inline-block align-text-bottom" />
                    <span>{error}</span>
                </div>
            )}
        </>
    );
}
