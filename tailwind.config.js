/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        focus:'#fff'
      },
      fontFamily: {
        'font-awesome': ['FontAwesome'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin', 'tw-elements/dist/plugin.cjs','daisyui','fontawsome')
  ],
}

