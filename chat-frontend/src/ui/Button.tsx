type ButtonParameters = {
    children: React.ReactNode;
};

export default function Button({ children }: ButtonParameters) {
    return (
        <button className="bg-pallete2 text-white p-2 rounded-md hover:text-white text-xl shadow">
            {children}
        </button>
    );
}
