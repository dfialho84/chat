"use client";

import styled from "styled-components";
import tw from "tailwind-styled-components";

const TwButton = tw.button`
    bg-pallete1
    text-white
    p-2
    rounded-md
    hover:text-white
    text-xl
    shadow
    hover:bg-pallete2
`;

const BaseButton = styled(TwButton).attrs((props) => ({
    type: props.type || "button",
}))``;

const Button = styled(BaseButton)``;

export default Button;
