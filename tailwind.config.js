/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class', //Note that it can also take the media or false option 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xxsMax':'480px',

      'xs':'480px',

      'xsMax':'639px',

      'sm':'640px',
      //=>@media (min-width:640px){...,}
      'smMax':'767px',


      'md':'768px',

      'mdMax':'1023px',

      'lg':'1024px',

      'lgMax':'1279px',

      'xl':'1280px',

      'xlMax':'1536px',

      '2xl':'1536px'
    },
    extend: {
      
    },
  },
  plugins: [],
}