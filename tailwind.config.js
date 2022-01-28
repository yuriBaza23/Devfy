module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'sp-gray-0': '#121212',
        'sp-gray': '#282828',
        'sp-gray-1': '#B3B3B3',
        'sp-gray-2': '#181818',
        'sp-gray-3': '#414040',
        'sp-black-op': 'rgba(0, 0, 0, .5)',
        'sp-green': '#1db954',
        'sp-green-main': '#1ED760'
      },
      backgroundImage: {
        'hero': "url('/bg.png')",
        'hero-2': "url('/bg2.png')"
      }
    },
  },
  plugins: [],
}
