/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FEFFFC",
                text: "37342F",
                ivory: {
                    darker: "#D1E7C5",
                    default: "#F1F7EA",
                },
                forestgreen: {
                    darker: "#04251C",
                    default: "#074634",
                    lighter: "#0B6F53",
                },
                peach: {
                    darker: "#FFCF99",
                    default: "#FFE0BA",
                    lighter: "#FFF6EB",
                },
                success: {
                    darker: "#B6DDA7",
                    default: "#CEE8C4",
                    lighter: "#E7F4E2",
                },
                error: {
                    darker: "#F1A7A7",
                    default: "#F7CBCB",
                    lighter: "#FCEDED",
                },
            },

            letterSpacing: {
                wide: '0.010em',
            },

            fontFamily: {
                opensans: ["var(--font-opensans)"],
                jomhuria: ["var(--font-jomhuria)"],
            },
        },
    },
    plugins: [],
};
