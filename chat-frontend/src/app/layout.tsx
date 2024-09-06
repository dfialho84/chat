import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Chat App",
    description: "Chat App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-pallete4 font-roboto flex flex-col h-screen">
                <Header />
                <div className="container m-auto flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
