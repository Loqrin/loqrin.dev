/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            backgroundImage: {
                homenoise: "url('./bg_home_noise.png')",
                homesmooth: "url('./bg_home_smooth.png')",
            },
        },
    },
    plugins: [],
};
