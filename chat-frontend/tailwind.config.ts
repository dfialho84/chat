import type { Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                pallete1: "#1A4D2E",
                pallete2: "#4F6F52",
                pallete3: "#E8DFCA",
                pallete4: "#F5EFE6",
            },
            fontFamily: {
                "press-start": [
                    '"Press Start 2P"',
                    ...defaultTheme.fontFamily.sans,
                ],
                roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
export default config;
