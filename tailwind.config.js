const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        },
    },
},
plugins: [require('@tailwindcss/forms')],
}

