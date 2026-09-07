import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-black': '#0A0A0C',
                'secondary-white': '#F2F2F4',
                'accent-charcoal': '#27272A',
                'muted-grey': '#A1A1AA',
            },
        },
    },
    plugins: [],
};
export default config;