  // tailwind.config.js
  module.exports = {
      purge: [],
      purge: [
          './components/**/*.{vue,js}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './nuxt.config.{js,ts}',
      ],
      darkMode: false, // or 'media' or 'class'
      theme: {
          extend: {
              colors: {
                  brand: {
                      700: '#01323D'
                  },
              }
          },
      },
      variants: {
          extend: {},
      },
      plugins: [],
  }
