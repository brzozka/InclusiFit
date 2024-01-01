/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      backgroundColor: ['high-contrast'],
      textColor: ['high-contrast'],
      borderColor: ['high-contrast'],
      ringColor: ['high-contrast'],
      ringWidth: ['high-contrast'],
      ringOffsetWidth: ['high-contrast']
    }
  },
  plugins: []
}
