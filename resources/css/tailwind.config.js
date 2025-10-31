import formsPlugin from "@tailwindcss/forms";
// Hapus 'import colors from 'tailwindcss/colors';'

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,css}"],
    darkMode: "class", // Menggunakan 'class' untuk dark mode
    theme: {
        extend: {
            colors: {
                // Palet warna utama (Light Mode)
                primary: {
                    DEFAULT: "#EA580C", // Orange-600
                    hover: "#C2410C", // Orange-700
                },
                secondary: {
                    DEFAULT: "#1E293B", // Slate-800
                    hover: "#0F172A", // Slate-900
                },
                accent: {
                    DEFAULT: "#0EA5E9", // Sky-500
                    hover: "#0284C7", // Sky-600
                },
                neutral: "#64748B", // Slate-500
                "base-100": "#FFFFFF", // White
                "base-200": "#F8FAFC", // Slate-50
                "base-300": "#F1F5F9", // Slate-100
                "base-content": "#334155", // Slate-700
                "base-section": "#FFF7ED", // Orange-50

                // Varian Dark Mode
                "dark-primary": {
                    DEFAULT: "#F97316", // Orange-500
                    hover: "#FB923C", // Orange-400
                },
                "dark-secondary": {
                    DEFAULT: "#E2E8F0", // Slate-200
                    hover: "#F1F5F9", // Slate-100
                },
                "dark-accent": {
                    DEFAULT: "#38BDF8", // Sky-400
                    hover: "#7DD3FC", // Sky-300
                },
                "dark-neutral": "#94A3B8", // Slate-400
                "dark-base-100": "#0F172A", // Slate-900
                "dark-base-200": "#1E293B", // Slate-800
                "dark-base-300": "#334155", // Slate-700
                "dark-base-content": "#CBD5E1", // Slate-300
                "dark-base-section": "#1E293B", // Slate-800

                // Warna semantik (langsung menggunakan HEX)
                info: {
                    DEFAULT: "#0ea5e9", // sky-500
                    dark: "#38bdf8", // sky-400
                },
                success: {
                    DEFAULT: "#16a34a", // green-600
                    dark: "#22c55e", // green-500
                },
                warning: {
                    DEFAULT: "#f59e0b", // amber-500
                    dark: "#fbbf24", // amber-400
                },
                danger: {
                    DEFAULT: "#dc2626", // red-600
                    dark: "#ef4444", // red-500
                },
            },
            fontFamily: {
                // Font body (Inter)
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                // Font heading (Playfair Display)
                serif: [
                    "Playfair Display",
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    '"Times New Roman"',
                    "Times",
                    "serif",
                ],
            },
            // Menambahkan animasi untuk modal/dropdown
            transitionProperty: {
                height: "height",
                spacing: "margin, padding",
            },
        },
    },
    plugins: [
        formsPlugin, // Plugin untuk styling form
    ],
};
