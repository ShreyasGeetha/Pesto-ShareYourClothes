module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        header: '#009900',
        headerComplimentary: '#1FBF1F',
        primary: "#ff4800",
        login: '#fee500',
        focus: "#2B802B",
        twitter: "#1DA1F2",
        saffron: "#FF9933",
        saffronComplimentary:"#0DABDB",
        blue: {
          450: "#5F99F7",
        }
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
