/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*/"],
  theme: {
    extend: {
      screens: {
        xsm: '400px',  // Extra small screens
        sm: '640px',   // Small screens
        md: '768px',   // Medium screens
        lg: '1024px',  // Large screens
        xl: '1280px',  // Extra large screens
        xxl: '1536px', // 2XL screens
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
       letterSpacing: {
        extra: '0.2em', // Custom extra spacing
        wide: '0.3em',  // Wider than default
        wider: '0.5em', // Very wide spacing
        ultra: '0.75em', // Ultra-wide spacing
      },
      wordSpacing: {
        tight: '-0.1em', // Reduced word spacing
        normal: '0.1em', // Slightly increased word spacing
        wide: '0.3em',   // Wide word spacing
        ultra: '0.5em',  // Ultra-wide word spacing
      },
       fontWeight: {
        thin: '100', // Extra light weight
        medium: '450', // Between medium and regular
        bold: '600', // Slightly less than bold
        ultrabold: '900', // Extremely bold
        black: '950', // Heavier than extra-bold
      },
    },
  },
  plugins: [],
}

