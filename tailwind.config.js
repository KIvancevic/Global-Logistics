module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '-45px': '-45px',
      }},
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-.025em',
      normal: '0em',
      wide: '.025em',
      wider: '0.05em',
      widest: '.1em',
      special: '.09em',
      special2: '.024em'
    },
    extend: {
      backgroundImage: theme => ({
        "sectionOneVolvoTruck" : "linear-gradient(to right , black, #3b83f626 50vw, black 100vw), url('/volvo.jpg')",
        "highway" : "url('/HighwayAZ.jpg')",
        "truck" : "url('/semi3.png')",
        "quoteUp" : "url('/quoteUp.png')",
        "quoteDown" : "url('/quoteDown.png')",
        "facebook" : "url('/fb.png')",
        "instagram" : "url('/instagramColorResized.png')",
        "linkedin" : "url('/linkedIn.png')",
        "close" : "url('/close.png')"
      }),
      colors: {
        'footerLight' : '#6B7280E6',
        'footerDark' : '#374151E6',
        'footerDarkOp1' : '#374151'
      },
      height: {
        highway: '32rem'
      },
      padding: {
        headings: '52.1rem'
      },
      margin: {
        '7.5em': '7.5em',
      },
      screens: {
        'xs' : '320px',
        'customers1' : '1682px',
        'customers2' : '622px',
        'carriers' : '851px',
        'mdlg' : '920px',
        'ifyoulooking' : '1078px',
        'buttonForm': '1094px',
        'asterisk' : '1500px'
      },
      textShadow: {
        'ContactUs': '1px 2px 3px rgba(147, 197, 253, .9), 2px 3px 4px rgba(31, 41, 55, .7)',
     },
     dropShadow: {
      '5xl': '20px 20px 20px rgba(0, 0, 0, 1)',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow')
  ],
}
