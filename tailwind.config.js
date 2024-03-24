/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{html,js,jsx,ts,tsx}',
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#FFCC00',
        //'#005643'
        customFont:"#d1efe9",
        customBack: "#fff",
        customHover:"#1c816b91",
        custombg:'#F5F4F4',
        customFooter:'rgb(245, 244, 244)',
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
