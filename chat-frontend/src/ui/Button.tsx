"use client";

import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
    className: `bg-pallete1 text-white p-2 rounded-md hover:text-white text-xl shadow hover:bg-pallete2 ${props.className}`,
}))``;

export default Button;
