module.exports = {
  darkMode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'ssm': {'max' : '640px'},
       // => @media (max-width: 640px) { ... } My customized screensize
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      
    }
  },
  plugins: [],
}
