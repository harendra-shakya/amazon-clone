module.exports = {
    mode: "jit",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                amazon_blue: {
                    light: "#232F3E",
                    DEFAULT: "#131921",
                },
            },
        },
    },
    experimental: {
        appDir: true,
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
