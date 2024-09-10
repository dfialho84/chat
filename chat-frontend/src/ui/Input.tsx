"use client";

// import styled from "styled-components";
import tw from "tailwind-styled-components";

// const Input = styled.input.attrs((props) => ({
//     className: `bg-pallete4 rounded-md ring-0 outline-1 outline-gray-300 mb-2 px-2 py-1 text-gray-600 border-none ${
//         props.type === "file" &&
//         "file:border-none file:bg-pallete2 file:text-pallete4"
//     } ${props.className}`,
// }))``;

const Input = tw.input`
    bg-pallete4
    rounded-md
    ring-0
    outline-1
    outline-gray-300
    mb-2
    px-2
    py-1
    text-gray-600
    border-none
    ${(props) =>
        props.type === "file" &&
        "file:border-none file:bg-pallete2 file:text-pallete4 file:py-1 px-0 py-0"}
`;

export default Input;
