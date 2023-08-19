/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./*.{html,js}"],
    content: [],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                dots: "url('./assets/dot-grid.webp')",
                sowhite: "url('./assets/so-white.png')",
            },
        },
    },
    plugins: [],
};
