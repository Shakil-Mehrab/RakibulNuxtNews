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
          screens: {
              'sm': '640px',
              'md': '768px',
              '2md': '992px',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1536px',
          }
      },
      variants: {
          extend: {},
      },
      plugins: [],
  }