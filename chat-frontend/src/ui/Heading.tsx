"use client";
import styled from "styled-components";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingParamenters = Readonly<{
    children: React.ReactNode;
    className?: string;
    type?: HeadingType;
}>;

const StyledHeading = styled.h1``;

export default function Heading({
    children,
    className,
    type = "h1",
}: HeadingParamenters) {
    const textSize =
        type === "h1"
            ? "text-3xl"
            : type === "h2"
            ? "text-2xl"
            : type === "h3"
            ? "text-xl"
            : type === "h4"
            ? "text-lg"
            : type === "h5"
            ? "text-md"
            : "text-sm";

    const finalClassName = `${textSize} text-pallete2 font-extrabold mb-4 ${className}`;

    return (
        <StyledHeading as={type} className={finalClassName}>
            {children}
        </StyledHeading>
    );
}
