/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 이 경로들에서 Tailwind 클래스를 감지함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}